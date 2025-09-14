import React from "react";
import img1 from '../../assets/doc1.jpg';
import img2 from '../../assets/doc2.jpg';
import img3 from '../../assets/doc3.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#083731] text-white overflow-hidden">
      {/* Background big circle */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#0b4a43] rounded-full"></div>

      {/* Background pill/capsule icons */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="7" width="18" height="10" rx="5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/3 opacity-10">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="7" width="18" height="10" rx="5" fill="currentColor" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-orange-500 font-bold text-xl">+</span>
          </div>
          <h1 className="text-xl font-bold">
            <span className="text-orange-500">Doc</span> House
          </h1>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-200">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Appointment</li>
          <li className="hover:text-orange-400 cursor-pointer">Login</li>
        </ul>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-20 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Your Best <br /> Medical Help Center
          </h2>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s standard.
          </p>
          <button className="bg-orange-400 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-500 transition">
            All Service
          </button>
        </div>

        {/* Doctor Images */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
          {/* Dotted Pattern */}
          <div className="absolute -left-16 top-1/3 hidden md:block opacity-30">
            <svg width="120" height="120" className="text-gray-200">
              <defs>
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="120" height="120" fill="url(#dots)" />
            </svg>
          </div>

          {/* Doctor Cards */}
          <div className="flex space-x-6 z-10">
            <div className="bg-white rounded-lg shadow-lg p-2 transform rotate-[-4deg]">
              <img src={img1} alt="Doctor 1" className="w-40 h-52 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-2 transform rotate-[3deg]">
              <img src={img2} alt="Doctor 2" className="w-40 h-52 object-cover rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-2 transform rotate-[-2deg] hidden lg:block">
              <img src={img3} alt="Doctor 3" className="w-40 h-52 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
