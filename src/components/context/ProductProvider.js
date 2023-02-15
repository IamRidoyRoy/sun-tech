import React, { createContext, useContext, useEffect, useState } from 'react';

const Product_Context = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const value = {
        data,
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