import React, { useState } from "react";
import LogoImg from "../../../public/assets/images/quiz-application-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#033872] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">
          <img
            src={LogoImg}
            alt="logo"
            className="img-fluid"
            width={140}
            draggable="false"
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200">
            Quizzes
          </Link>
          <Link to="/about" className="hover:text-blue-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#033872]`}
      >
        <nav className="space-y-2 py-4 px-6">
          <Link to="/" className="block hover:text-blue-300">
            Quizzes
          </Link>
          <Link to="/about" className="block hover:text-blue-300">
            About
          </Link>
          <Link to="/contact" className="block hover:text-blue-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
