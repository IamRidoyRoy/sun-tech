import React from "react";
import { useProducts } from "../components/context/ProductProvider";
import ProductCard from "../components/ProductCard";

const TopRated = () => {

  const { state: { products, loading, error } } = useProducts();

  let content;

  if (loading) {
    content = <p>It's Loading Baby!</p>

  }

  if (error) {
    content = <p>Occuers an Error!</p>
  }

  if (!error && !loading && products.length === 0) {
    content = <p>There is no products to show!</p>
  }

  // Add filter option for showing top ratted product. 
  if (!error && !loading && products.length) {
    content = products.filter((productf) => productf.rating >= 4).map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
  }
  return (
    <div >
      <h2 className="flex justify-center text-2xl mt-6">Top Rated Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {content}

      </div>
    </div>
  );
};

export default TopRated;
