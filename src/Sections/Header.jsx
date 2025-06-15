import { useState, useRef, useEffect } from "react";
import { SearchIcon, CartIcon, HeartIcon, UserIcon } from "../assets/Icons/HomeIcons";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery(""); 
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-center md:justify-between p-3 md:p-4 lg:p-6 shadow-sm shadow-[#ebe9e4]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="text-[#333333] flex gap-0.5 md:gap-1 items-center">
          <span className="w-4 h-4 md:w-5 md:h-5">
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
          <span className="text-xl md:text-2xl font-bold logo"> Shopora</span>
        </Link>

        <button
          className="md:hidden text-[#333333] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center w-full mt-3 space-y-3">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-9 relative pr-3 py-1.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#dedbd2] overflow-x-hidden w-full text-sm"
            />
            <span
              className="absolute top-1.5 right-1.5 w-5 h-5 cursor-pointer text-[#333333]"
              onClick={() => {
                navigate(`/search?query=${searchQuery}`);
                setSearchQuery(""); 
              }}
            >
              <SearchIcon />
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Link to="/cart" className="w-4 h-4 cursor-pointer text-[#333333]">
              <CartIcon />{" "}
            </Link>
            <Link
              to="/favorites"
              className="w-4 h-4 cursor-pointer text-[#333333]"
            >
              <HeartIcon />{" "}
            </Link>
            <div className="relative" ref={dropdownRef}>
              <span
                className="w-4 h-4 cursor-pointer text-[#333333] flex items-center justify-center"
                onClick={toggleDropdown}
              >
                <UserIcon />
              </span>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => handleDropdownClick("/account")}
                    className="block px-3 py-1.5 text-xs text-[#333333] hover:bg-[#ebe9e4] cursor-pointer w-full text-left"
                  >
                    Account
                  </button>
                  <button
                    onClick={() => handleDropdownClick("/login")}
                    className="block px-3 py-1.5 text-xs text-[#333333] hover:bg-[#ebe9e4] cursor-pointer w-full text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleDropdownClick("/register")}
                    className="block px-3 py-1.5 text-xs text-[#333333] hover:bg-[#ebe9e4] cursor-pointer w-full text-left"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center md:gap-10 lg:md-14 mt-3 md:mt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="pl-9 relative pr-3 py-1.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#dedbd2] overflow-x-hidden text-sm"
          />
          <span
            className="absolute top-1.5 right-1.5 w-5 h-5 cursor-pointer text-[#333333]"
            onClick={() => {
              navigate(`/search?query=${searchQuery}`);
              setSearchQuery(""); 
            }}
          >
            <SearchIcon />
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <Link to="/cart" className="w-4 h-4 cursor-pointer text-[#333333]">
            <CartIcon />{" "}
          </Link>
          <Link
            to="/favorites"
            className="w-4 h-4 cursor-pointer text-[#333333]"
          >
            <HeartIcon />{" "}
          </Link>
          <div className="relative" ref={dropdownRef}>
            <span
              className="w-4 h-4 cursor-pointer text-[#333333] flex items-center justify-center"
              onClick={toggleDropdown}
            >
              <UserIcon />
            </span>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-md shadow-lg z-10">
                <button
                  onClick={() => handleDropdownClick("/account")}
                  className="block px-3 py-1.5 text-xs text-[#333333] hover:bg-[#ebe9e4] cursor-pointer w-full text-left"
                >
                  Account
                </button>
                <button
                  onClick={() => handleDropdownClick("/login")}
                  className="block px-3 py-1.5 text-xs text-[#333333] hover:bg-[#ebe9e4] cursor-pointer w-full text-left"
                >
                  Login
                </button>
                <button
                  onClick={() => handleDropdownClick("/register")}
                  className="block px-3 py-1.5 text-xs text-[#333333] hover:bg-[#ebe9e4] cursor-pointer w-full text-left"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
