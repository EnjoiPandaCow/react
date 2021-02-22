import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';


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
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        // Creates an arrray of the ingredient keys. 
        const sum = Object.keys(ingredients)
            .map(igKey => {
                // Accessing the amount for each ingredient. 
                return ingredients[igKey]
            })
            // Reduce used to sum up all of the array elements. 
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0});
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

        // Checking to see if we can purchase the burger. 
        this.updatePurchaseState(updatedIngredients);
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

        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchasableCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'CJ',
                address: {
                    street: 'Test Street',
                    postcode: '010101',
                    country: 'Ireland'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});   
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };
        
        // Checking if each key in the state is less that 0 and returning true or false. 
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary 
            ingredients={this.state.ingredients} 
            price={this.state.totalPrice}
            purchaseCancled={this.purchasableCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}/> 


        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchasableCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    purchasable={!this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);