// components/Header.js

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
          <h1 className="text-lg font-bold">PromiseTracker</h1>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <p className="font-semibold">Account</p>
          </div>
          <div className="mr-4">
              <a href="">Shared with</a>
              <a href="/my-promises" className="mr-2 hover:underline">My Promises</a>
              <a href="/shared-with-me" className="mr-2 hover:underline">Shared With Me</a>       
            <button className="hover:underline">Logout</button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
