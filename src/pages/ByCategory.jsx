import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card"; 
import { HeartIcon } from "../assets/Icons/HomeIcons";
import { StarIcon } from "../assets/Icons/HomeIcons";

function ByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      setError(null);
      try {
        const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
        const encodedCategory = encodeURIComponent(formattedCategory);
        const response = await fetch(
          `https://dummyjson.com/products/category/${encodedCategory}`
        );
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

    if (category) {
      fetchProductsByCategory();
    }
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">
          Loading products for {category}...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 capitalize">
        {category} Products
      </h2>
      {products.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 text-[#735751]">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div className="text-center text-xl text-gray-600 py-10">
          No products found for {category}.
        </div>
      )}
    </div>
  );
}

export default ByCategory;
