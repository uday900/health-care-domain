import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 WeCare. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;