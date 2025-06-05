import React from "react";
import {
  HeadsetIcon,
  ShieldIcon,
  TruckIcon,
} from "../assets/Icons/FooterIcons";
export default function TrustBadges() {
  const badges = [
    {
      icon: <TruckIcon className="w-6 h-6 text-purple-600" />,
      title: "Free & Fast Delivery",
      description: "On all orders over $150 ",
    },
    {
      icon: <HeadsetIcon className="w-6 h-6 text-blue-600" />,
      title: "24/7 Customer Service",
      description: "We're here to help anytime",
    },
    {
      icon: <ShieldIcon className="w-6 h-6 text-green-600" />,
      title: "Money Back Guarantee",
      description: "No worries if you change your mind",
    },
  ];
  return (
    <section className=" py-6 px-4 rounded-2xl ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-6 text-center">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 border border-[#dedbd2]"
          >
            <div className="p-2 bg-[#dedbd2] rounded-full text-[#735751]">
              {badge.icon}
            </div>
            <h3 className="text-lg text-[#413b39] font-semibold">
              {badge.title}
            </h3>
            <p className="text-sm text-[#756d5d]">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
