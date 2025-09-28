"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import AuthContext from "@/context/AuthContext/AuthContext";
import Swal from "sweetalert2";

// Icons (as before) … MenuIcon, XIcon, SunIcon, MoonIcon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out Successfully",
          text: "You Logged-Out",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        })
      })
  }

  const navLinks = (
    <>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 lg:pb-3 pb-1 border-[#F7A582] px-3 rounded"
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
              ? "border-b-2 lg:pb-3 pb-1 border-[#F7A582] px-3 rounded"
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
              ? "border-b-2 lg:pb-3 pb-1 border-[#F7A582] px-3 rounded"
              : "px-3 rounded hover:border-b-0"
          }
          to="/appointment"
        >
          Appointment
        </NavLink>
      </ul>
      {
        user ?
          <>
            <ul>
              <NavLink
                className="px-3 rounded hover:border-b-0"
                onClick={handleLogout}
              >
                Log Out
              </NavLink>
            </ul>
            <ul>
              <NavLink to='/dashboard/addashboard'>
                  {
                    user.phtotURL === null ?
                      <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="" /> :
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwobOiULVUj1oukdw3Qj-KTBwOzmrgCPwvg&s" className="w-10 h-10 rounded-full" alt="" />
                  }
                </NavLink>
            </ul>
          </> :
          <>
            <ul>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 lg:pb-3 pb-1 border-[#F7A582] px-3 rounded"
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
                    ? "border-b-2 lg:pb-3 pb-1 border-[#F7A582] px-3 rounded"
                    : "px-3 rounded hover:border-b-0"
                }
                to="/register"
              >
                Register
              </NavLink>
            </ul>
          </>
      }
    </>
  );

  return (
    <header className="py-3 z-10 text-gray-900 bg-teal-950 w-full">
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
          <div className="px-2 pt-2 pb-1 space-y-1 sm:px-3 text-white">
            {navLinks}
          </div>
            
        </div>
      )}
    </header>
  );
};

export default Header;
