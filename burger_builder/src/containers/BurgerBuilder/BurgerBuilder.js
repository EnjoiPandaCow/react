import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0, 
    meat: 2.50,
    bacon: 2.0
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        // Access the old state and the amount of a single type of ingredient.
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            // State should be updated in an immuteable way. Use the spread operator to create a new object.
            ...this.state.ingredients 
        };
        updatedIngredients[type] = updatedCount;
        
        // Updating the price of the burger. 
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        // Access the old state and the amount of a single type of ingredient.
        const oldCount = this.state.ingredients[type];

        // If there is no ingridents nothing happens.
        if(oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            // State should be updated in an immuteable way. Use the spread operator to create a new object.
            ...this.state.ingredients 
        };
        updatedIngredients[type] = updatedCount;
        
        // Updating the price of the burger. 
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };
        
        // Checking if each key in the state is less that 0 and returning true or false. 
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;