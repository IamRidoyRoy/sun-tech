import React, { createContext, useState } from 'react';
import { Children } from 'react';

const Product_Context = createContext();

const ProductProvider = (children) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setData(data.data))
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

export default ProductProvider;