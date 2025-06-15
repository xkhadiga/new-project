import React from "react";
import Header from "../Sections/Header";
import Categories from "../Sections/Categories";
import ProductsGrid from "../Sections/ProductsGrid";
import Footer from "../Sections/Footer";
import AdBanner from "../Components/AdBanner";
import TrustBadges from "../Components/TrustBadges";
import Testimonials from "../Sections/Testimonials";
import Recommended from "../Sections/Recommended";
import ImageSlider from "../Components/ImageSlider";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-6 md:p-10 mb-6 md:mb-10 bg-[#dedbd2] text-[#413b39]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Discover Your Next Favorite Product
        </h2>
        <p className="text-sm md:text-base mb-4 md:mb-6">Trendy. Affordable. Delivered to you.</p>
        <Link to="/all-products" className="bg-black text-white px-5 py-1.5 md:px-6 md:py-2 rounded-xl hover:bg-[#333333] cursor-pointer transition text-sm md:text-base">
          Shop Now
        </Link>
      </section>
      <div className="px-2 sm:px-4 md:px-6">
        <Categories />

        <div className="border-[#dedbd2] my-10 md:my-20"></div>
        {/* Image Slider */}
        <ImageSlider />
        <div className="border-[#dedbd2] my-10 md:my-20"></div>

        {/* Product Grid */}
        <ProductsGrid />

        <div className="border-b-1 border-[#dedbd2] my-10 md:my-20"></div>
        {/* Trust Badges */}
        <TrustBadges />
        <div className="border-b-1 border-[#dedbd2] my-10 md:my-20"></div>
        {/* Ad Banner */}
        <div className="my-10 md:my-20 px-2 md:px-6 py-1 ">
          <AdBanner
            title="🍉 Fresh & Juicy Deals!"
            subtitle="Cool off with our fruity selection—watermelon, citrus & more. Up to 40% off!"
            ctaText="Pick Your Fruits"
            ctaLink="/fruit-collection"
            imageUrl="https://images.unsplash.com/photo-1604759695540-3012f9682c28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            bgColor="bg-[#cde59b]"
          />
        </div>
        {/* Recommended */}
        <Recommended />
        <div className="border-b-1 border-[#dedbd2] my-10 md:my-20"></div>
        {/* Testimonials */}
        <Testimonials />
        <div className="my-10 md:my-30"></div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
