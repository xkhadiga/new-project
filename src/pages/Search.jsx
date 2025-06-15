import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Components/Card'; 

function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchQuery) {
        setProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  if (loading) {
    return <div className="text-center mt-4 md:mt-8 text-base md:text-xl">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 md:mt-8 text-red-500 text-base md:text-xl">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-2 md:p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Search Results for "{searchQuery}"</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-600 text-sm md:text-base">No products found for "{searchQuery}".</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-[#735751]">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
