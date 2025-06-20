import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products.slice(0, 8));
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-2 md:p-0">
      
      <div className="text-base md:text-xl px-2 md:px-6 mb-3 md:mb-4 text-[#756d5d]">
        Explore Our Products
      </div>

      <section className="p-2 md:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 text-[#735751]">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
      <AnimationOnScroll animateIn="animate__fadeIn" 
      className="text-center mt-6 md:mt-8"
      >
          <Link
            to="/all-products"
            className="bg-black hover:bg-[#333333] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-md transition duration-300 text-sm md:text-base"
          >
            Browse All Products
          </Link>
      </AnimationOnScroll>
    </div>
  );
}
