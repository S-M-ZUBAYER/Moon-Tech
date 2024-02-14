import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ProductInitialState, ProductReducer } from '../ProductState/ProductState';
import { productActionTypes } from '../ProductState/productsActionTypes';
const Product_Context = createContext();

const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, ProductInitialState)

console.log(state)
    useEffect(() => {
        dispatch({
            type: productActionTypes.FETCHING_START
        })
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => dispatch({ type: productActionTypes.FETCHING_SUCCESS, payload: data }))
            .catch(() => {
        dispatch({ type: productActionTypes.FETCHING_ERROR })
    })
    }, [])
   

    const value = {
       state,dispatch
    }

    return (
        <Product_Context.Provider value={value}>
            {children}
        </Product_Context.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(Product_Context);
    return context;
}

export default ProductsProvider;