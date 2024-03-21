'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import logo from './forever.png';
import './header.css';
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <header className="bg-purple-300 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="logo-img h-15 w-15 mr-4" />
          <h1 className="text-lg font-bold text-red-600 font-cursive">Forever</h1>
        </div>
        <div className="relative">
        <button
            onClick={toggleDropdown}
            className="focus:outline-none mr-4"
            style={{
                borderRadius: '50%',
                backgroundColor: backgroundColor,
                width: '40px', // Adjust width as needed
                height: '40px', // Adjust height as needed
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white', // Change text color for better contrast
                fontSize: '1rem', // Adjust font size as needed
                fontWeight: 'bold' // Adjust font weight as needed
            }}
            >
            NS
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
