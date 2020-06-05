import * as actions from './actions';
import axios from '../../axios-orders';


const setIngredients = (ingredients) => {
    return {
        type: actions.SET_INGREDIENTS,
        ingredients: ingredients
    }
}


const fetchIngredientsFailed = () => {
    return {
        type: actions.FETCH_INGREDIENTS_FAILED
    }
}

//EXPORTS

export const addIngredient = (ingredient) => {
    return {
        type: actions.ADD_INGREDIENT,
        ingredient: ingredient
    }
}

export const removeIngredient = (ingredient) => {
    return {
        type: actions.REMOVE_INGREDIENT,
        ingredient: ingredient
    }
}

export const initIngredients = () => {
    return dispatch  => (
       axios.get('/ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed())
        })
    )
}