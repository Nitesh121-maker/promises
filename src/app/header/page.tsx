'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import logo from './forever.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-purple-300 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="h-8 mr-4" />
          <h1 className="text-lg font-bold text-red-600 font-cursive">Forever</h1>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none mr-4">
            Account
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <div className="py-1">
                <a href="#/shared" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shared</a>
                <a href="#/my-promises" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Promises</a>
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
