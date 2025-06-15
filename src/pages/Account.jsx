import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Account() {
  
  const [user] = useState({
    name: 'Sarah Doe',
    email: 'sarah.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Alexandria, EGYPT 12345',
    joinDate: 'January 1, 2023',
    profilePic: 'https://randomuser.me/api/portraits/women/90.jpg',
  });

  const handleLogout = () => {
    alert('Logout successful!');
    
  };

  return (
    <div className="min-h-screen bg-[#ebe9e4] py-4 md:py-8">
      <div className="container mx-auto px-2 md:px-4">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-6 md:mb-8">My Account</h2>

          {/* Profile Picture and Basic Info */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 md:border-4 border-[#dedbd2] shadow-md mb-3 md:mb-4"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-[#333333]">{user.name}</h3>
            <p className="text-gray-600 text-sm md:text-base">{user.email}</p>
          </div>

          {/* Profile Information Section */}
          <div className="mb-6 md:mb-8 border-b pb-4 md:pb-6 border-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mb-3 md:mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1 md:mb-2">Phone:</label>
                <p className="text-gray-900 text-base md:text-lg">{user.phone}</p>
              </div>
              <div>
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1 md:mb-2">Address:</label>
                <p className="text-gray-900 text-base md:text-lg">{user.address}</p>
              </div>
              <div>
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1 md:mb-2">Member Since:</label>
                <p className="text-gray-900 text-base md:text-lg">{user.joinDate}</p>
              </div>
            </div>
            <div className="mt-4 md:mt-6 text-right">
              <Link
                to="/account/edit" 
                className="bg-[#dedbd2] hover:bg-[#c2bfb8] text-[#333333] font-semibold py-1.5 px-3 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 text-sm md:text-base"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Order History Section */}
          <div className="mb-6 md:mb-8 border-b pb-4 md:pb-6 border-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mb-3 md:mb-4">Order History</h3>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">No recent orders found.</p>
            {/* You would map through orders here */}
            <div className="mt-4 md:mt-6 text-right">
              <Link
                to="/orders" 
                className="text-[#333333] hover:text-[#555555] font-bold text-xs md:text-sm"
              >
                View All Orders
              </Link>
            </div>
          </div>

          {/* Settings/Preferences Section */}
          <div className="mb-6 md:mb-8 pb-4 md:pb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mb-3 md:mb-4">Preferences</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
              <li className="mb-1.5 md:mb-2">Email Notifications: <span className="font-semibold">Enabled</span></li>
              <li className="mb-1.5 md:mb-2">Dark Mode: <span className="font-semibold">Disabled</span></li>
              <li>Language: <span className="font-semibold">English</span></li>
            </ul>
            <div className="mt-4 md:mt-6 text-right">
              <Link
                to="/settings" 
                className="text-[#333333] hover:text-[#555555] font-bold text-xs md:text-sm"
              >
                Manage Preferences
              </Link>
            </div>
          </div>

          {/* Logout Section */}
          <div className="text-center mt-6 md:mt-8">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 px-4 md:py-2 md:px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 text-base md:text-lg cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
