'use client';
import React, { useState } from 'react';
import logo from './forever.png';

const RegistrationPage = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    // e.preventDefault();
    // Add your logic here for form submission, such as sending data to backend
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-screen-lg">
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 bg-purple-900 text-white p-8">
          <img src={logo.src} alt="Logo" className="h-17rem mb-8" />
          <p className="font-romantically text-lg text-red-600 mb-8">Keep your story alive by creating an account below</p>
        </div>
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="font-montserrat text-4xl mb-8 text-red-600 text-center md:text-left">Welcome Forever</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-bold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-600 font-bold mb-2">Phone Number</label>
              <input
                type="text"
                id="number"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-bold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-purple-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
