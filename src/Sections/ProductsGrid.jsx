import React, { useEffect, useState } from "react";
import { HeartIcon, StarIcon } from "../assets/Icons/HomeIcons";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products.slice(8, 16));
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-xl px-6 mb-4 text-[#756d5d]">Explore Our Products</h2>

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[#735751]">
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
                    product.price / (1 - product.discountPercentage / 100)
                  )}`}
                </s>
              )}
            </div>

            <div className="flex gap-1 text-sm mt-1">
  <div className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} filled={i < Math.round(product.rating)} />
    ))}
  </div>              <span className="text-gray-400">({product.stock} in stock)</span>
            </div>

            <button className="mt-3 bg-black text-white py-1 px-4 rounded-sm hover:bg-[#333333] cursor-pointer transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
