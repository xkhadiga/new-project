import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Register attempt with:', { name, email, password });
    alert('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ebe9e4] p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-5 md:mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 md:mb-4">
            <label htmlFor="name" className="block text-gray-700 text-xs md:text-sm font-semibold md:font-bold mb-1 md:mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-1.5 px-2 md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#dedbd2] text-sm"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 md:mb-4">
            <label htmlFor="email" className="block text-gray-700 text-xs md:text-sm font-semibold md:font-bold mb-1 md:mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-1.5 px-2 md:py-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#dedbd2] text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 md:mb-4">
            <label htmlFor="password" className="block text-gray-700 text-xs md:text-sm font-semibold md:font-bold mb-1 md:mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-1.5 px-2 md:py-2 md:px-3 text-gray-700 mb-2 md:mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-[#dedbd2] text-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 md:mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-xs md:text-sm font-semibold md:font-bold mb-1 md:mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-1.5 px-2 md:py-2 md:px-3 text-gray-700 mb-2 md:mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-[#dedbd2] text-sm"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-[#333333] text-white font-semibold py-1.5 px-3 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 text-sm md:text-base w-full sm:w-auto"
            >
              Register
            </button>
            <Link to="/login" className="inline-block align-baseline font-semibold text-xs md:text-sm text-[#333333] hover:text-[#555555]">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
