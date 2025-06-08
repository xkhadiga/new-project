import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-[#735751]">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#dedbd2] relative rounded-2xl p-4 shadow hover:shadow-lg shadow-[#dedbd2] transition cursor-pointer"
            >
              <span className="absolute top-2 right-2 w-5 h-5">
                <HeartIcon />
              </span>
              <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="font-medium text-lg">{product.title}</h3>

              <div className="flex gap-2 text-sm mt-1">
                <p className="font-semibold">EGP {product.price}</p>
                {product.discountPercentage && (
                  <s className="text-gray-400">
                    {`EGP 
                             ${Math.round(
                               product.price /
                                 (1 - product.discountPercentage / 100)
                             )}`}
                  </s>
                )}
              </div>

              <div className="flex gap-1 text-sm mt-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < Math.round(product.rating)} />
                  ))}
                </div>{" "}
                <span className="text-gray-400">
                  ({product.stock} in stock)
                </span>
              </div>

              <button className="mt-3 bg-black text-white py-1 px-4 rounded-sm hover:bg-[#333333] cursor-pointer transition">
                Add to Cart
              </button>
            </div>
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
