import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=100"); 
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
    fetchAllProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-xl mt-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-xl mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-xl  m-4 text-[#756d5d] text-center">All Products</h2>
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[#735751]">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
