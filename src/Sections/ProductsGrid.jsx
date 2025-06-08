import React, { useEffect, useState } from "react";
import Card from "../Components/Card"; // Import the new Card component

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
          <Card key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
