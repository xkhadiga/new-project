import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FashionIcon,
  SmartphoneIcon,
  ComputerIcon,
  FragranceIcon,
  SkincareIcon,
  GroceriesIcon,
  BeautyIcon,
  FurnIcon,
  DecorIcon,
  KitchenIcon,
  ShirtIcon,
  ShoesIcon,
  MWatchesIcon,
  EarphoneIcon,
  MotorIcon,
  SportsIcon,
  SunglassesIcon,
  TabletIcon,
  TopsIcon,
  CarIcon,
  BagIcon,
  NecklaceIcon,
  HeelsIcon,
  FWatchesIcon,
} from "../assets/Icons/CategoriesIcons";
import { LeftIcon, RightIcon } from "../assets/Icons/HomeIcons";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const iconMap = {
    beauty: <BeautyIcon />,
    fragrances: <FragranceIcon />,
    furniture: <FurnIcon />,
    groceries: <GroceriesIcon />,
    "home-decoration": <DecorIcon />,
    "kitchen-accessories": <KitchenIcon />,
    laptops: <ComputerIcon />,
    "mens-shirts": <ShirtIcon />,
    "mens-shoes": <ShoesIcon />,
    "mens-watches": <MWatchesIcon />,
    "mobile-accessories": <EarphoneIcon />,
    motorcycle: <MotorIcon />,
    "skin-care": <SkincareIcon />,
    smartphones: <SmartphoneIcon />,
    "sports-accessories": <SportsIcon />,
    sunglasses: <SunglassesIcon />,
    tablets: <TabletIcon />,
    tops: <TopsIcon />,
    vehicle: <CarIcon />,
    "womens-bags": <BagIcon />,
    "womens-dresses": <FashionIcon />,
    "womens-jewellery": <NecklaceIcon />,
    "womens-shoes": <HeelsIcon />,
    "womens-watches": <FWatchesIcon />,
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(
        data.map((category) => ({
          name: category.name,
          icon: iconMap[category.slug] || null, 
        }))
      );
    };
    fetchCategories();
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < categories.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="flex flex-col p-2 md:p-0">
      <div className="px-2 md:px-6 flex items-center justify-between text-[#756d5d] mb-4">
        <h2 className="text-base md:text-xl">
          Browse By Categories
        </h2>
        <div className="flex gap-2 md:gap-4">
          <button onClick={handlePrev} className="text-[#756d5d] hover:text-[#595246] cursor-pointer w-6 h-6 md:w-8 md:h-8">
            <LeftIcon />
          </button>
          <button className="text-[#756d5d] hover:text-[#595246] cursor-pointer w-6 h-6 md:w-8 md:h-8"
            onClick={handleNext} >
            <RightIcon />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 p-2 md:p-4 items-center justify-center">
        {categories
          .slice(startIndex, startIndex + itemsPerPage)
          .map((category, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#dedbd2] aspect-square transition-all duration-300 animate-in fade-in zoom-in   cursor-pointer rounded-sm p-2 flex flex-col items-center justify-center shadow-sm border-[#dedbd2] border-1"
              onClick={() => navigate(`/bycategory/${category.name}`)}
            >
              <div className="w-12 h-12 md:w-[4rem] md:h-[4rem] mb-1 md:mb-2 text-[#756d5d]">
                {category.icon}
              </div>
              <h3 className="text-xs md:text-sm text-center">{category.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
