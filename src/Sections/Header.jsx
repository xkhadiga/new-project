import  { useState } from 'react'
import { SearchIcon, CartIcon, HeartIcon } from "../assets/Icons/HomeIcons";

export default function Header() {
     const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchQuery); 
    }
  };
  return (
          <header className="flex items-center justify-between p-6 shadow-md">
        <h1 className="text-2xl font-bold logo">Shopora</h1>
        <div className="flex items-center gap-14">
            <div className='relative'>
              <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="pl-10 relative pr-4 py-[.4rem] border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#dedbd2] overflow-x-hidden"
          />
          <span className="absolute top-2 right-2 w-5 h-5 cursor-pointer text-[#333333]"> 
            <SearchIcon />
          </span>
            </div>
            <div className='flex gap-2'>
          <div className="w-5 h-5 cursor-pointer text-[#333333]"> 
            <CartIcon /> </div>
          <div className="w-5 h-5 cursor-pointer text-[#333333]"> 
            <HeartIcon /> </div>
            </div>

        </div>
      </header>
  )
}

