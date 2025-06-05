import React from "react";
import { CartPlus } from "../assets/Icons/HomeIcons";

export default function Recommended() {
  const recommended = [
    {
      id: 1,
      name: "Strawberry Lip Gloss",
      price: "EGP 85",
      img: "https://images.unsplash.com/photo-1631214524098-e6e900c1260d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Summer Tote Bag",
      price: "EGP 220",
      img: "https://images.unsplash.com/photo-1567747450007-f324221e5598?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Cute Water Bottle",
      price: "EGP 120",
      img: "https://plus.unsplash.com/premium_photo-1723651262792-9220b2fae964?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Minimal Gold Necklace",
      price: "EGP 150",
      img: "https://images.unsplash.com/photo-1683807622248-20e7ff87c09e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="px-6">
            <h2 className="text-xl px-6 mb-4 text-[#756d5d]"> You Might Also Like</h2>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-4 px-4">
        {recommended.map((item) => (
          <div
            key={item.id}
            className="border border-[#dedbd2] relative rounded-2xl p-4 shadow hover:shadow-lg shadow-[#dedbd2] transition cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex justify-between items-center">
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            
              <button className=" bg-black text-white py-1 px-4 rounded-sm hover:bg-[#333333] cursor-pointer transition">
                <CartPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
