import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles/index.scss"
import App from "./containers/App/App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import buildBurger from "./store/reducers/buildBurger"
import placeOrder from "./store/reducers/placeOrder"
import fetchOrders from "./store/reducers/fetchOrders"
import login from "./store/reducers/login"
import signup from "./store/reducers/signup"
import updateProfile from "./store/reducers/updateProfile"
import thunk from "redux-thunk"

const composeEnhancers =
	(process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null) || compose

const rootReducer = combineReducers({
	buildBurger,
	placeOrder,
	fetchOrders,
	login,
	signup,
	updateProfile
})

const store = createStore(
	rootReducer,
	/* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(
	<React.StrictMode>{app}</React.StrictMode>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
