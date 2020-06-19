import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// transform an object of key value pairs into an array of burger ingredients
const burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
                // key = salad1 type = salad1
            });
        })
        // flatten the array to get mutliple arrays in an object
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
// no input, ask user to enter input 
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;