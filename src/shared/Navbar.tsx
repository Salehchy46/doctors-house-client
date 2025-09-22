"use client";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Icons (as before) … MenuIcon, XIcon, SunIcon, MoonIcon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = (
    <>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
              : "px-3 rounded hover:border-b-0"
          }
          to="/"
        >
          Home
        </NavLink>
      </ul>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
              : "px-3 rounded hover:border-b-0"
          }
          to="/about"
        >
          About
        </NavLink>
      </ul>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
              : "px-3 rounded hover:border-b-0"
          }
          to="/appointment"
        >
          Appointment
        </NavLink>
      </ul>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
              : "px-3 rounded hover:border-b-0"
          }
          to="/login"
        >
          Login
        </NavLink>
      </ul>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
              : "px-3 rounded hover:border-b-0"
          }
          to="/register"
        >
          Register
        </NavLink>
      </ul>
    </>
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="py-3 z-10 opacity-80 text-gray-900 fixed dark:text-white backdrop-blur-sm w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="container mx-auto">
          <div className="navbar items-center h-16 my-5">
            {/* Logo */}
            <div className="navbar-start flex-shrink-0">
              <a href="#" className="flex items-center gap-2">
                <img src="./logo/logo-docs.png" className="w-20" alt="Logo" />
                <span className="text-[35px] font-bold text-gray-900 dark:text-white">
                  <span className="text-[#F7A582]">Doc</span> House
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="navbar-end hidden md:flex items-center gap-3 text-white">
              {navLinks}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t border-gray-200 dark:border-gray-700"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
