import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/productReducer';

const Product_Context = createContext();

const ProductProvider = ({ children }) => {

    // Call the product reducer & initialState 
    const [state, dispatch] = useReducer(productReducer, initialState)
    console.log(state);

    // Dispatch all action in useeffect
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch('products.json')
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
            .catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            })
    }, [])

    const value = {
        state,
        dispatch,
    }
    return (
        <Product_Context.Provider value={value}>
            {children}
        </Product_Context.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(Product_Context)
    return context;
};

export default ProductProvider;