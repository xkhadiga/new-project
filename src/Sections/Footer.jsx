import React from "react";


export default function Footer() {

  return (
    <div className="flex">
      <footer className="bg-[#dedbd2] text-[#756d5d] pt-6 pb-4 px-4 md:px-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 border-b border-[#bdb7b6] pb-6 md:pb-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold logo mb-2 md:mb-3">Shopora</h2>
            <p className="text-xs md:text-sm text-[#413b39]">
              Discover trendy products, unbeatable prices, and a seamless
              shopping experience. Shopora is your one-stop destination for all
              things stylish and practical.
            </p>
            <div className="flex text-[#413b39] items-center gap-3 md:gap-4 mt-3 md:mt-4">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 fill-current hover:text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.9H17l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -2 20 20"
                  className="w-4 h-4 md:w-5 md:h-5 fill-current hover:text-blue-400"
                >
                  <title>{"twitter [#154]"}</title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 fill-current hover:text-pink-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Customer Service</h3>
            <ul className="space-y-1.5 md:space-y-2 text-[#413b39] text-xs md:text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Returns & Refunds</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">About Shopora</h3>
            <ul className="space-y-1.5 md:space-y-2 text-[#413b39] text-xs md:text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Join Our Newsletter</h3>
            <p className="text-xs md:text-sm text-[#413b39] mb-3 md:mb-4">
              Get updates and exclusive deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-1.5 md:gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-md text-black flex-1 text-sm"
              />
              <button className="bg-black hover:bg-[#333333] cursor-pointer px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium text-white text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between items-center text-[#413b39] text-xs md:text-sm gap-3 md:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            <div className="flex items-center gap-0.5 md:gap-1">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h2a1 1 0 010 2H5v14h2a1 1 0 110 2H5a2 2 0 01-2-2V5zm18-2a2 2 0 012 2v14a2 2 0 01-2 2h-2a1 1 0 110-2h2V5h-2a1 1 0 110-2h2z" />
              </svg>
              <span>+20 100 123 4567</span>
            </div>
            <div className="flex items-center gap-0.5 md:gap-1">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.18l-10 6.1L2 5.18V4zm0 3.8v12.2a2 2 0 002 2h16a2 2 0 002-2V7.8l-10 6.1L2 7.8z" />
              </svg>
              <span>support@shopora.com</span>
            </div>
            <div className="flex items-center gap-0.5 md:gap-1">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span>Cairo, Egypt</span>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Shopora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
