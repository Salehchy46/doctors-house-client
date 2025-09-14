"use client"
import { useTheme } from "next-themes";
import { useState } from "react";
import { FaClinicMedical } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Icons from lucide-react, commonly used with shadcn/ui
const MenuIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const SunIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

const Header = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    // Navigation links data
    const navLinks = <>
        <ul><NavLink className={({ isActive }) =>
            isActive
                ? "border-b-2 border-[#F7A582] px-3 rounded"
                : "px-3 rounded hover:border-b-0"
        } to='/'>Home</NavLink></ul>
        <ul><NavLink className={({ isActive }) =>
            isActive
                ? "border-b-2 border-[#F7A582] px-3 rounded"
                : "px-3 rounded hover:border-b-0"
        } to='/about'>About</NavLink></ul>
        <ul><NavLink className={({ isActive }) =>
            isActive
                ? "border-b-2 border-[#F7A582] px-3 rounded"
                : "px-3 rounded hover:border-b-0"
        } to='/appointment'>Appointment</NavLink></ul>
        <ul><NavLink className={({ isActive }) =>
            isActive
                ? "border-b-2 border-[#F7A582] px-3 rounded"
                : "px-3 rounded hover:border-b-0"
        } to='/login'>Login</NavLink></ul>
    </>

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="p-3 fixed z-10 opacity-80 bg-transparent text-gray-900 backdrop-blur-sm top-0 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2">
                            <FaClinicMedical className="text-6xl mr-3 text-gray-900 dark:text-white" />
                            <span className="text-[35px] font-bold text-gray-900 dark:text-white"><span className="text-[#F7A582]">Doc</span> House</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center navbar-end gap-3 text-white">
                        {navLinks}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </button>
                    </nav>

                    {/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle Button */}
                        

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Sheet) */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
                        {navLinks}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;