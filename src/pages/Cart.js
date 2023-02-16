import React from "react";
import { useProducts } from "../components/context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { state: { cart, loading, error } } = useProducts();
  let content;

  if (loading) {
    content = <p>It's Loading Baby!</p>
  }

  if (error) {
    content = <p>Occuers an Error!</p>
  }

  if (!error && !loading && cart.length === 0) {
    content = <p>There is no products to show!</p>
  }

  if (!error && !loading && cart.length) {
    content = cart.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>All Cart Product</h1>
      {content}
    </div>
  );
};

export default Cart;