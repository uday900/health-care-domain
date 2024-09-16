import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to = '/'>
          <h1 className="text-xl font-bold">WeCare</h1>
          </Link>
          <p className="ml-4 text-sm">Call Us: 000 22537</p>
        </div>
        {/* hide these in mobile */}
        <div className="hidden sm:flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login as a Coach
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login as a User
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Join as a Coach
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Join as a User
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;