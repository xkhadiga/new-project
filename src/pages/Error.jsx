import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorIcon } from '../assets/Icons/HomeIcons';

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ebe9e4] text-[#333333] p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <div className="mb-6">
          <ErrorIcon className="w-24 h-24 mx-auto text-red-500" /> {/* Adjust size and color as needed */}
        </div>
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-6">Something went wrong.</h2>
        <p className="text-gray-700 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-[#333333] hover:bg-[#444444] text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 text-lg"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
