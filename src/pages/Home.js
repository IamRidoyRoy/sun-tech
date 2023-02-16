import { useProducts } from "../components/context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Home = () => {

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

  if (!error && !loading && products.length) {
    content = products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>

      {content}

    </div>
  );
};

export default Home;
