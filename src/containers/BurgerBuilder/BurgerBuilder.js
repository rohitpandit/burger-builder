import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: .5,
    cheese: .4,
    meat: .3,
    bacon: .7
}

class BurgerBuilder extends Component{

    state={
        ingredients: {
            salad: 0, 
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice :4

    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type]= newCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredients = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return ;
        }
        const newCount = oldCount - 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type]= newCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrcie;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
    }

    render(){

        const disabledInfo ={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredients }
                    disabled={disabledInfo} 
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
} 

export default BurgerBuilder;
