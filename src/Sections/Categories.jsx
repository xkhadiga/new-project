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
      console.log("Fetched Categories:", data); // Log the fetched categories
      setCategories(
        data.map((category) => ({
          name: category.name,
          icon: iconMap[category.slug] || null, // Use null if no icon is found
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
    <div className="flex flex-col">
      <div className=" px-6 flex items-center justify-between text-[#756d5d]">
        <h2 className="text-xl mb-4 ">
          Browse By Categories
        </h2>
              <div className="flex  mt-4">
        <button onClick={handlePrev} className="text-[#756d5d] hover:text-[#595246] cursor-pointer ">
          <LeftIcon />
        </button>
        <button className="text-[#756d5d] hover:text-[#595246] cursor-pointer "
        onClick={handleNext} >
          <RightIcon />
        </button>

      </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 items-center justify-center">
        {categories
          .slice(startIndex, startIndex + itemsPerPage)
          .map((category, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#dedbd2] aspect-square  transition-all duration-300 cursor-pointer rounded-sm p-2 flex flex-col items-center justify-center shadow-sm border-[#dedbd2] border-1 "
              onClick={() => navigate(`/bycategory/${category.name}`)}
            >
              <div className="w-[4rem] h-[4rem] mb-2 text-[#756d5d]">
                {category.icon}
              </div>
              <h3 className="text-sm">{category.name}</h3>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Categories;
