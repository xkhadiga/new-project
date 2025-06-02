import React from "react";

export const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 -0.5 25 25"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M5.5 10.765a5.765 5.765 0 1 1 11.53 0 5.765 5.765 0 0 1-11.53 0Z"
        clipRule="evenodd"
      />
      <path d="M17.029 16.53 19.5 19" />
    </g>
  </svg>
);

export const CartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor">
      <path d="M4 .75H1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h2.012l2.724 11.481A4.25 4.25 0 0 0 9.765 18V18h7.822a4 4 0 0 0 3.943-3.325l1.256-7.338A2 2 0 0 0 20.814 5H5.997l-.78-3.289A1.25 1.25 0 0 0 4 .75ZM10 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </g>
  </svg>
);

export const HeartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="m4.426 12.947 5.736 6.175a2.508 2.508 0 0 0 3.676 0l5.736-6.175c1.901-2.047 1.901-5.365 0-7.412-1.901-2.047-4.984-2.047-6.886 0a.94.94 0 0 1-1.377 0c-1.9-2.047-4.984-2.047-6.885 0-1.901 2.047-1.901 5.365 0 7.412Z"
    />
  </svg>
);
export const RightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon glyph"
    viewBox="0 0 24 24"
    width="2rem"
    {...props}
  >
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.71 10.71-3 3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l2.3-2.29-2.3-2.29a1 1 0 0 1 1.42-1.42l3 3a1 1 0 0 1 0 1.42Z"
      style={{
        fill: "currentColor",
      }}
    />
  </svg>
);
export const LeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon glyph"
    viewBox="0 0 24 24"
    width="2rem"
    {...props}
  >
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1.71 12.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0l-3-3a1 1 0 0 1 0-1.42l3-3a1 1 0 0 1 1.42 1.42L11.41 12Z"
      style={{
        fill: "currentColor",
      }}
    />
  </svg>
);
export const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-[#ffd500]" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.974-2.888a1 1 0 00-1.176 0l-3.974 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.01 10.1c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.519-4.674z" />
  </svg>
);

