import React from "react";

export default function AdBanner ({ 
  title = "Special Offer!",
  subtitle = "Get up to 50% off on selected items.",
  ctaText = "Shop Now",
  ctaLink = "/products",
  imageUrl = "https://source.unsplash.com/800x600/?shopping,store",
  bgColor = "bg-yellow-100",
})  {
  return (
    <div className={`w-full rounded-2xl shadow-md overflow-hidden flex flex-col-reverse md:flex-row items-center p-3 md:p-5 ${bgColor}`}>
      <div className="md:w-1/2 text-center space-y-4 ">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{title}</h2>
        <p className="sm:text-lg text-gray-600 ">{subtitle}</p>
        <a 
          href={ctaLink} 
          className="inline-block bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition "
        >
          {ctaText}
        </a>
      </div>
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src={imageUrl} 
          alt="Ad banner" 
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

 ;
