"use client";
import { FaClinicMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-3 bg-gradient-to-r from-teal-300 to-teal-500 dark:from-teal-800 dark:to-teal-950 text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FaClinicMedical className="text-6xl mr-3"></FaClinicMedical>
            <h3 className="text-[35px] font-bold">
              <span className="text-[#F7A582]">Doc</span> House
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Resources
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            123 Tech Avenue, Innovation City, 98765
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Email: info@yourbrand.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 dark:border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Doc House. All rights reserved.
        </p>
        <p className="mt-1">
          Designed<span className="text-red-500"></span> by Saleh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
