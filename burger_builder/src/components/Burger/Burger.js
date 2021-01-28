import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css'

const burger = (props) => {

    // Breaks down the ingredients objects keys in to an array. 
    let transformendIngredients = Object.keys(props.ingredients)
        // Executes a function on each element in the input array. 
        .map(igKey => {
            // Transfrom the string value into as many elements as we have ingredients for a given ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        /* Flatten the array - Pull out the values of the inner arrays and create on value.
        Reduce accepts the previous value (arr) and the current value (el).
        It accepts a callback ({}) and an inital value ([]). */
        .reduce((arr, el) => {
            // Will loop through all of the elements and add them to the intial value. 
            return arr.concat(el)
        }, []);

    if (transformendIngredients.length === 0) {
        transformendIngredients = <p>Please start addding ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformendIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger; 