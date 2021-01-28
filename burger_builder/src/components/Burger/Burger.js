import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css'

const burger = (props) => {

    // Breaks down the ingredients objects keys in to an array. 
    const transformendIngredients = Object.keys(props.ingredients)
        // Executes a function on each element in the input array. 
        .map(igKey => {
            // Transfrom the string value into as many elements as we have ingredients for a given ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformendIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger; 