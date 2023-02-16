import React from 'react';
import { useProducts } from '../components/context/ProductProvider';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
    const { state: { wishlist, loading, error } } = useProducts();
    let content;

    if (loading) {
        content = <p>It's Loading Baby!</p>

    }

    if (error) {
        content = <p>Occuers an Error!</p>
    }

    if (!error && !loading && wishlist.length === 0) {
        content = <p>There is no products to show!</p>
    }

    if (!error && !loading && wishlist.length) {
        content = wishlist.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    return (
        <div>
            <h2 className='flex justify-center'>All product From WishList</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {content}
            </div>
        </div>
    );
};

export default Wishlist;