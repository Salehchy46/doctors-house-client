"use client";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto p-3 max-w-[1600px] text-black py-12 px-4 font-inter">
      <div className="container mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="./logo/transparent-bg-logo.png" className="w-20" alt="" />
            <h3 className="text-[35px] font-bold">
              <span className="text-[#F7A582]">Doc</span> <span className="text-teal-950">House</span>
            </h3>
          </div>
          <p className=" text-sm leading-relaxed">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          <button className="btn btn-xl bg-gray-300 border-[#F7A582] text-[#F7A582]">Appointment</button>
           
        </div>
        <div className="space-y-4">
          <h3 className="text-[25px] font-bold dark:text-black">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/about'>About Us</Link>
            </li>
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/service'>Service</Link>
            </li>
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/doctors'>Doctors</Link>
            </li>
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/departments'>Departments</Link>
            </li>
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/olinePaments'>Online Paments</Link>
            </li>
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/contactUs'>Contact Us</Link>
            </li>
            <li>
                <Link className="text-xl font-semibold text-gray-500" to='/myAccount'>My Account</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-[25px] font-bold dark:text-black">
            Doc House Services
          </h3>
          <ul className="space-y-3">
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/pediatricClinic'>Pediatric Clinic</Link>
            </li>
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/diagonsisClinic'>Diagonsis Clinic</Link>
            </li>
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/cardiacClinic'>Cardiac Clinic</Link>
            </li>
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/laboratoryanalysis'>Laboratory Analysis</Link>
            </li>
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/gynecologicalClinic'>Gynecological Clinic</Link>
            </li>
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/personalCounseling'>Personal Counseling</Link>
            </li>
            <li>
              <Link className="text-xl font-semibold text-gray-500" to='/dentalClinic'>Dental Clinic</Link>
            </li>
            
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-[25px] font-bold dark:text-black">
            Working Hours
          </h3>
          <p className="text-xl font-semibold text-gray-500">Monday - 10 am to 7 pm</p>
          <p className="text-xl font-semibold text-gray-500">Tuesday - 10 am to 7 pm</p>
          <p className="text-xl font-semibold text-gray-500">Wednesday - 10 am to 7 pm</p>
          <p className="text-xl font-semibold text-gray-500">Thursday - 10 am to 7 pm</p>
          <p className="text-xl font-semibold text-gray-500">Friday - 10 am to 7 pm</p>
          <p className="text-xl font-semibold text-gray-500">Saturday - 10 am to 7 pm</p>
          <p className="text-xl font-semibold text-gray-500">Sunday - 10 am to 7 pm</p>
        </div>
      </div>
      <div className="border-t-2 mt-10 border-gray-500 mx-20"></div>
      <div className="text-center text-gray-500 dark:text-gray-700 text-sm pt-10 mt-10 dark:border-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Doc House. All rights reserved.
        </p>
        <p className="mt-1">
          Designed by Saleh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
