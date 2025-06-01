import React from "react";

export default function ProductsGrid() {
  return (
    <div>
      <h2 className="text-xl px-6 mb-4 text-[#756d5d]">Explore Our Products</h2>

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="border border-[#dedbd2] relative rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer"
          >
            <span className="absolute top-2 right-2">heart</span>
            <div className="w-full h-40 bg-gray-100 rounded-xl mb-4"></div>
            <h3 className="font-medium text-lg">Product Name</h3>
            <div className="flex gap-1">
              <p className="text-gray-600">$29.99</p>
              <s className="text-gray-400">($35)</s>
            </div>

            <div className="flex gap-1">
              <p>stars</p>
              <span className="text-gray-400">(70)</span>
            </div>
            <button className="mt-3 bg-black text-white py-1 px-4 rounded-sm hover:bg-gray-900 cursor-pointer transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
