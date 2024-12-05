import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation
  const navigating = () => {
    console.log("Navigating to login...");
    navigate("/login");
  };

  return (
    <div>
      <nav className="flex bg-black h-14">
        {/* Logo and Title */}
        <div className="flex mr-auto mt-2 px-16">
          <h1 className="text-white text-2xl italic">NatureNest</h1>
          <img className="h-9" src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="text-xl font-bold space-x-16 mt-3 italic text-white px-12">
          <a href="#home" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-300">
            About
          </a>
          <a href="#services" className="hover:text-yellow-300">
            Popular
          </a>
          <a href="#contact" className="hover:text-yellow-300">
            Review
          </a>
        </div>

        {/* Login Button */}
        <div>
          <button
            onClick={navigating} // Pass the function reference
            className="ml-5 px-6 py-2 mt-2 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </div>

        {/* Profile Icon */}
        <div className="w-10 h-10 mt-2 bg-gray-200 rounded-full flex items-center justify-center space-x-4 ml-4 mr-9">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
