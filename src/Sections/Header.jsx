import { useState } from "react";
import { SearchIcon, CartIcon, HeartIcon } from "../assets/Icons/HomeIcons";
import { Link } from "react-router-dom";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchQuery);
    }
  };
  return (
    <header className="flex items-center justify-between p-6 shadow-md">
      <Link to="/" className="text-[#333333]  flex gap-1 items-center">
        <span className="w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M3 1 0 4v1s2 1 4 1 4-1 4-1 2 1 4 1 4-1 4-1V4l-3-3H3Z" />
              <path
                fillRule="evenodd"
                d="M1 15V7.519C1.817 7.765 2.882 8 4 8c1.303 0 2.533-.32 3.382-.603.227-.075.435-.15.618-.222a14 14 0 0 0 .618.222C9.468 7.681 10.698 8 12 8c1.118 0 2.183-.235 3-.481V15H7v-5H4v5H1Zm11-5h-2v3h2v-3Z"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </span>
        <span className="text-2xl font-bold logo"> Shopora</span>
      </Link>

      <div className="flex items-center gap-14">
        <div className="relative">
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
        <div className="flex gap-2">
          <Link to="/cart" className="w-5 h-5 cursor-pointer text-[#333333]">
            <CartIcon />{" "}
          </Link>
          <Link
            to="/favorites"
            className="w-5 h-5 cursor-pointer text-[#333333]"
          >
            <HeartIcon />{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
