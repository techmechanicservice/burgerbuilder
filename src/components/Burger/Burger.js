import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients';

const burgerClasses = [classes.Burger, classes.burgerScroll];
const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((igArray,currentIg)=>{
        return igArray.concat(currentIg)
    },[]);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p className={classes.burgerP}>Feel free to add ingredients</p>
    }

    return(
        
        <div className={burgerClasses.join(' ')}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}


export default burger;