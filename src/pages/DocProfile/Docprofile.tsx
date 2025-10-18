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
  country: string;
  about_me: string;
  education: Education[];
  work_experience: WorkExperience[];
  services: string[];
  awards: Award[];
  specializations: string[];
  contact: Contact;
};


const Docprofile: React.FC = () => {
  const details = useLoaderData() as CvDetails | CvDetails[];

  // If details is an array
  const detailArray = Array.isArray(details) ? details : [details];

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
              detailArray.map((doctor) => <div className='hero-content'>
                <div>
                  <img src={doctor.image} className='w-[350px] h-96 object-cover rounded-xl m-5' alt="" />
                </div>
                <div>
                  <h3 className='text-[40px] font-bold'>{doctor.name}</h3>
                  <p className='my-1.5'>{doctor.specialty}</p>
                  <div className="rating rating-xs">
                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="2 star" />
                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="5 star" defaultChecked />
                  </div>
                  <div className='flex my-1.5 gap-3'>
                    <CiLocationOn></CiLocationOn>
                    <p>{doctor.country} <Link to='/' className='text-[#F7A582]'>Get Directions</Link></p>
                  </div>
                  <div className='flex max-w-[460px] mb-3 gap-3'>
                    <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                    <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                    <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                    <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                    <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                  </div>
                  <div className='flex gap-3'>
                    {
                      doctor?.specializations.map(specialisation => 
                        <h5 className='text-xl p-3 text-center font-semibold text-[#6C6B6B] border rounded-xl border-[#6C6B6B]'>{specialisation}</h5>
                      )
                    }
                    
                  </div>
                </div>
              </div>)
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
