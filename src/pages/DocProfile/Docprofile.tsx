import React from "react";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Locations from "./Details/Locations";
import DocReviews from "./Details/DocReviews";
import BusinessHour from "./Details/BusinessHour";
import AppointmentSerial from "./Details/AppointmentSerial";
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';


type Education = {
  institution: string;
  degree: string;
  years: string;
};

type WorkExperience = {
  clinic: string;
  role: string;
  years: string;
};

type Award = {
  date: string;
  title: string;
  description: string;
};

type Contact = {
  email: string;
  phone: string;
  image: string;
  country: string;
  hospital: string;
  rating: number;
  experience_years: number;
};

type CvDetails = {
  _id: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  country: string;
  about_me: string;
  education: Education[];
  work_experience: WorkExperience[];
  services: string[];
  awards: Award[];
  specializations: string[];
  contact: Contact;
};

type Location = string | { lat: number; lng: number };


const Docprofile: React.FC = () => {
  const details = useLoaderData() as CvDetails | CvDetails[];

  // If details is an array
  const detailArray = Array.isArray(details) ? details : [details];


const handleGetDirections = (location: Location): void => {
  if (typeof location === "string") {
    const query = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, "_blank");
  } else {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`, "_blank");
  }
};

  return (
    <div>
      <div className="bg-teal-950">
        <div className="max-w-[1280px] mx-auto">
          <Hero />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="pt-28 pb-10 text-black max-w-[1280px] mx-auto">
          <div className="hero bg-white min-h-[450px] rounded-xl flex">
            {
              detailArray.map((doctor, index) => (
                <div className='hero-content' key={index}>
                  <div>
                    <img
                      src={doctor.image}
                      className='w-[350px] h-96 object-cover rounded-xl m-5'
                      alt={doctor.name}
                    />
                  </div>

                  <div>
                    <h3 className='text-[40px] font-bold'>{doctor.name}</h3>
                    <p className='my-1.5'>{doctor.specialty}</p>

                    <div className="rating rating-sm flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={star}
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star bg-orange-400"
                          aria-label={`${star} star`}
                          checked={Math.round(doctor.rating) === star}
                          readOnly
                        />
                      ))}
                      <span className="ml-2 text-gray-600 text-sm">
                        {doctor.rating?.toFixed(1) || "N/A"}
                      </span>
                    </div>

                    <div className='flex my-1.5 gap-3 items-center'>
                      <CiLocationOn className="text-xl" />
                      <p>
                        {doctor.country}{" "}
                        <Link to='' className='text-[#F7A582]'>
                          <button
                            onClick={() => handleGetDirections(doctor.country)}
                            className='text-[#F7A582] underline'
                          >
                            Get Directions
                          </button>

                        </Link>
                      </p>
                    </div>

                    <div className='flex max-w-[460px] mb-3 gap-3'>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className='w-20 p-16 rounded-xl bg-gray-100'></div>
                      ))}
                    </div>

                    <div className='flex flex-wrap gap-3'>
                      {doctor?.specializations?.map((specialisation, i) => (
                        <h5
                          key={i}
                          className='text-xl p-3 text-center font-semibold text-[#6C6B6B] border rounded-xl border-[#6C6B6B]'
                        >
                          {specialisation}
                        </h5>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="text-black pb-36">
          <div className="max-w-[1280px] mx-auto rounded-xl bg-white">
            <div className="p-7">
              <Tabs>
                <TabList className="flex gap-2">
                  <Tab
                    className="px-10 rounded-tl-xl hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
                    selectedClassName="bg-[#F7A582] border-0 p-3 text-white"
                  >
                    Overview
                  </Tab>
                  <Tab
                    className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
                    selectedClassName="bg-[#F7A582] border-0 p-3 text-white"
                  >
                    Location
                  </Tab>
                  <Tab
                    className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
                    selectedClassName="bg-[#F7A582] border-0 p-3 text-white"
                  >
                    Reviews
                  </Tab>
                  <Tab
                    className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
                    selectedClassName="bg-[#F7A582] border-0 p-3 text-white"
                  >
                    Appointments
                  </Tab>
                  <Tab
                    className="px-10 rounded-tr-xl hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white"
                    selectedClassName="bg-[#F7A582] border-0 p-3 text-white"
                  >
                    Business Hours
                  </Tab>
                </TabList>

                {/* Overview Tab */}
                <TabPanel>
                  {detailArray.map((detail) => (
                    <div key={detail._id}>
                      <h6 className="text-xl font-bold mt-5">About Me</h6>
                      <p className="my-3">{detail.about_me}</p>

                      <div className="flex flex-wrap gap-8">
                        {/* Left column */}
                        <div className="flex-1 min-w-[300px]">
                          <h6 className="text-xl font-bold mt-5">Education</h6>
                          <ul className="m-5 list-disc">
                            {detail.education.map((ed, idx) => (
                              <li key={idx} className="mb-3">
                                <p className="font-bold">{ed.institution}</p>
                                <p className="my-1.5">{ed.degree}</p>
                                <p>{ed.years}</p>
                              </li>
                            ))}
                          </ul>

                          <h6 className="text-xl font-bold mt-5">
                            Work & Experience
                          </h6>
                          <ul className="m-5 list-disc">
                            {detail.work_experience.map((we, idx) => (
                              <li key={idx} className="mb-3">
                                <p className="font-bold">{we.clinic}</p>
                                <p className="my-1.5">{we.role}</p>
                                <p>{we.years}</p>
                              </li>
                            ))}
                          </ul>

                          <h6 className="text-xl font-bold mt-5">Services</h6>
                          <ul className="m-5 list-disc">
                            {detail.services.map((srv, idx) => (
                              <li key={idx}>{srv}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Right column */}
                        <div className="flex-1 min-w-[300px]">
                          <h6 className="text-xl font-bold mt-5">Awards</h6>
                          <ul className="m-5 list-disc">
                            {detail.awards.map((award, idx) => (
                              <li key={idx} className="mb-3">
                                <p className="font-bold">
                                  {award.title}{" "}
                                  <span className="text-sm">
                                    ({award.date})
                                  </span>
                                </p>
                                <p className="my-1.5">{award.description}</p>
                              </li>
                            ))}
                          </ul>

                          <h6 className="text-xl font-bold mt-5">Contact</h6>
                          <div className="m-5">
                            <p>Email: {detail.contact.email}</p>
                            <p>Phone: {detail.contact.phone}</p>
                            <p>Hospital: {detail.contact.hospital}</p>
                            <p>Country: {detail.contact.country}</p>
                            <p>Rating: {detail.contact.rating}</p>
                            <p>
                              Experience: {detail.contact.experience_years} years
                            </p>
                          </div>

                          <h6 className="text-xl font-bold mt-5">
                            Specializations
                          </h6>
                          <ul className="m-5 list-disc">
                            {detail.specializations.map((spec, idx) => (
                              <li key={idx}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabPanel>

                {/* Other Tabs */}
                <TabPanel>
                  <Locations />
                </TabPanel>
                <TabPanel>
                  <DocReviews />
                </TabPanel>
                <TabPanel>
                  <AppointmentSerial />
                </TabPanel>
                <TabPanel>
                  <BusinessHour />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docprofile;
