import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorIcon } from '../assets/Icons/HomeIcons';

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ebe9e4] text-[#333333] p-2 md:p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-sm md:max-w-md w-full">
        <div className="mb-4 md:mb-6">
          <ErrorIcon className="w-20 h-20 md:w-24 md:h-24 mx-auto text-red-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Oops!</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Something went wrong.</h2>
        <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-[#333333] hover:bg-[#444444] text-white font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 text-base md:text-lg"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
