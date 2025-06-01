import React from "react";
import Header from "../Sections/Header";
import Categories from "../Sections/Categories";
import ProductsGrid from "../Sections/ProductsGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen  bg-white text-gray-800">
      {/* Header */}
    <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 mb-10 bg-[#dedbd2]">
        <h2 className="text-3xl font-semibold mb-4">
          Discover Your Next Favorite Product
        </h2>
        <p className="text-gray-600 mb-6">
          Trendy. Affordable. Delivered to you.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-900 cursor-pointer transition">
          Shop Now
        </button>
      </section>
      <div className="px-6">

      {/* Product Grid */}
      <ProductsGrid />
      <div className="border-b-1 border-[#dedbd2] my-20"></div>
      <Categories />

      {/* Footer */}
      <footer className="text-center p-6 mt-20 border-t border-[#dedbd2] text-sm text-gray-500">
        &copy; 2025 ShopMate. All rights reserved.
      </footer>
      </div>
    </div>
  );
}
