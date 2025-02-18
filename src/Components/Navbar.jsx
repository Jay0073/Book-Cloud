import React, { useState } from "react";
import { Search, Menu, X, LogIn, Book, CircleUserIcon } from "lucide-react";
import './CSS/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  // Desktop Navigation Link Component
  const NavLink = ({ href, text }) => (
    <a
      href={href}
      className="
      text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400
      font-medium
      transition duration-150 ease-in-out
    "
    >
      {text}
    </a>
  );

  // Mobile Navigation Link Component
  const MobileNavLink = ({ href, text }) => (
    <a
      href={href}
      className="
      block px-3 py-2 rounded-lg
      text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800
      font-medium
      transition duration-150 ease-in-out
    "
    >
      {text}
    </a>
  );

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Book Cloud
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <li onClick={() => {setMenu("home");}}><Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("library");}}><Link to='/library' style={{textDecoration:'none', color:'white'}}>My Library</Link>{menu === "library" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("explore");}}><Link to='/explore' style={{textDecoration:'none', color:'white'}}>Explore</Link>{menu === "explore" ? <hr /> : <></>}</li>
            <li onClick={() => {setMenu("aboutus");}}><Link to='/about' style={{textDecoration:'none', color:'white'}}>About Us</Link>{menu === "aboutus" ? <hr /> : <></>}</li>
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search eBooks..."
                className={`
                w-48 px-4 py-2 rounded-lg
                bg-gray-100 dark:bg-gray-800
                text-gray-700 dark:text-gray-300
                border border-transparent
                focus:border-indigo-500 dark:focus:border-indigo-400
                focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800
                focus:outline-none
                transition-all duration-200
              `}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Desktop Sign In Button */}
            <button
              className="
            flex items-center px-4 py-2 rounded-lg
            bg-indigo-600 hover:bg-indigo-700
            dark:bg-indigo-500 dark:hover:bg-indigo-600
            text-white font-medium
            transition duration-150 ease-in-out
          "
            >
              <CircleUserIcon className="h-7 w-7 mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Sign In Button */}
            <button
              className="
            flex items-center px-3 py-1.5 rounded-lg
            bg-indigo-600 hover:bg-indigo-700
            dark:bg-indigo-500 dark:hover:bg-indigo-600
            text-white text-sm font-medium
            transition duration-150 ease-in-out
          "
            >
              <LogIn className="h-4 w-4 mr-1" />
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" text="Home" />
            <MobileNavLink href="/library" text="My Library" />
            <MobileNavLink href="/explore" text="explore" />

            {/* Mobile Search */}
            <div className="relative mt-4 px-2">
              <input
                type="text"
                placeholder="Search eBooks..."
                className="
                w-full px-4 py-2 rounded-lg
                bg-gray-100 dark:bg-gray-800
                text-gray-700 dark:text-gray-300
                border border-transparent
                focus:border-indigo-500 dark:focus:border-indigo-400
                focus:outline-none
              "
              />
              <Search className="absolute right-5 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
