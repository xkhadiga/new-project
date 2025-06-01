
import React from 'react';
import { FashionIcon, SmartphoneIcon, ComputerIcon, FragranceIcon, SkincareIcon, GroceriesIcon } from '../assets/Icons/CategoriesIcons'; 

const categories = [
  { name: 'Fashion', icon: <FashionIcon /> },
  { name: 'Smartphones', icon: <SmartphoneIcon /> },
  { name: 'Computers', icon: <ComputerIcon /> },
  { name: 'Fragrances', icon: <FragranceIcon /> },
  { name: 'Skincare', icon: <SkincareIcon /> },
  { name: 'Groceries', icon: <GroceriesIcon /> },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 items-center justify-center">
      {categories.map((category) => (
        <div key={category.name} className="bg-white hover:bg-[#dedbd2]  transition-all duration-300 cursor-pointer rounded-sm p-2 flex flex-col items-center shadow-sm border-[#dedbd2] border-1">
          <div className="w-[2.5rem] h-[2.5rem] mb-2">{category.icon}</div>
          <h3 className="text-sm">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
