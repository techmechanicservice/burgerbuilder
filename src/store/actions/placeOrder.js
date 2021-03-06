import * as actions from "./actions";
import axios from "axios";
import { updateOrdersStatus } from "../actions/fetchOrders";

const startPurchase = () => {
  return {
    type: actions.PURCHASE_BURGER_START
  };
};

const notifySuccess = checkOutMessage => {
  return {
    type: actions.PURCHASE_BURGER_SUCCESS,
    checkOutMessage
  };
};

const notifyFailure = checkOutMessage => {
  return {
    type: actions.PURCHASE_BURGER_FAIL,
    checkOutMessage
  };
};

export const purchaseBurger = (orderData, idToken, showAlert) => {
  return dispatch => {
    const endPoint = "https://fir-7cc33-default-rtdb.firebaseio.com/orders.json?auth=" + idToken;

    dispatch(startPurchase());
    axios
      .post(endPoint, orderData)
      .then(
        () => {
          dispatch(notifySuccess("Thank you for purchasing!"));
          dispatch(updateOrdersStatus("outdated"));
          showAlert(true);
        },
        () => {
          dispatch(notifyFailure("Failed to place your order :( Please try again"));
          showAlert(true);
        }
      )
      .catch(() => {
        dispatch(notifyFailure("Network Error! Failed to place your order :("));
      });
  };
};
