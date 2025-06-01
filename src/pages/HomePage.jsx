import React from "react";
import Header from "../Sections/Header";
import Categories from "../Sections/Categories";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
    <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-[#dedbd2]">
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

      {/* Product Grid */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="border border-[#dedbd2] relative rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <span className="absolute top-2 right-2">heart</span>
            <div className="w-full h-40 bg-gray-100 rounded-xl mb-4"></div>
            <h3 className="font-medium text-lg">Product Name</h3>
            <div className="flex gap-1">
              <p className="text-gray-600">$29.99</p>
              <s  className="text-gray-400">($35)</s>
            </div>
 
            <div className="flex gap-1" >
              <p>stars</p>
              <span className="text-gray-400">(70)</span>
            </div>
            <button className="mt-3 bg-black text-white py-1 px-4 rounded-sm hover:bg-gray-900 cursor-pointer transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
      <Categories />

      {/* Footer */}
      <footer className="text-center p-6 mt-10 border-t text-sm text-gray-500">
        &copy; 2025 ShopMate. All rights reserved.
      </footer>
    </div>
  );
}
