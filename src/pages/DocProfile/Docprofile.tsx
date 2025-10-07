import React from 'react';
import Hero from './Hero';
import DocDetail from './DocDetail';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Locations from "./Details/Locations";
import DocReviews from "./Details/DocReviews";
import BusinessHour from "./Details/BusinessHour";
import AppointmentSerial from "./Details/AppointmentSerial";

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
    about_me: string;
    education: Education[];
    work_experience: WorkExperience[];
    services: string[];
    awards: Award[];
    specializations: string[];
    contact: Contact;
};

const Docprofile: React.FC = () => {
    const details = useLoaderData() as CvDetails;

    return (
        <div>
            <div className='bg-teal-950'>
                <div className='max-w-[1280px] mx-auto'>
                    <Hero />
                </div>
            </div>

            <div className='bg-gray-100'>
                <div className='pt-28 pb-10 text-black max-w-[1280px] mx-auto'>
                    <DocDetail />
                </div>
            </div>

            <div className='bg-gray-100'>
                <div className='text-black pb-36'>
                    <div className="max-w-[1280px] mx-auto rounded-xl bg-white">
                        <div className="p-7">
                            <Tabs>
                                <TabList className="flex gap-2">
                                    <Tab className="px-10 rounded-tl-xl hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white" selectedClassName="bg-[#F7A582] border-0 p-3 text-white">Overview</Tab>
                                    <Tab className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white" selectedClassName="bg-[#F7A582] border-0 p-3 text-white">Location</Tab>
                                    <Tab className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white" selectedClassName="bg-[#F7A582] border-0 p-3 text-white">Reviews</Tab>
                                    <Tab className="px-10 hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white" selectedClassName="bg-[#F7A582] border-0 p-3 text-white">Appointments</Tab>
                                    <Tab className="px-10 rounded-tr-xl hover:border-b-0 py-3 text-[20px] font-bold hover:bg-[#F7A582] hover:text-white" selectedClassName="bg-[#F7A582] border-0 p-3 text-white">Business Hours</Tab>
                                </TabList>

                                {/* Overview Tab */}
                                <TabPanel>
                                    <div>
                                        <h6 className="text-xl font-bold mt-5">About Me</h6>
                                        <p className="my-3">{details.about_me}</p>

                                        <div className="flex flex-wrap gap-8">
                                            {/* Left column */}
                                            <div className="flex-1 min-w-[300px]">
                                                <h6 className="text-xl font-bold mt-5">Education</h6>
                                                <ul className="m-5 list-disc">
                                                    {details.education.map((ed, idx) => (
                                                        <li key={idx} className="mb-3">
                                                            <p className="font-bold">{ed.institution}</p>
                                                            <p className="my-1.5">{ed.degree}</p>
                                                            <p>{ed.years}</p>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <h6 className="text-xl font-bold mt-5">Work & Experience</h6>
                                                <ul className="m-5 list-disc">
                                                    {details.work_experience.map((we, idx) => (
                                                        <li key={idx} className="mb-3">
                                                            <p className="font-bold">{we.clinic}</p>
                                                            <p className="my-1.5">{we.role}</p>
                                                            <p>{we.years}</p>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <h6 className="text-xl font-bold mt-5">Services</h6>
                                                <ul className="m-5 list-disc">
                                                    {details.services.map((srv, idx) => (
                                                        <li key={idx}>{srv}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Right column */}
                                            <div className="flex-1 min-w-[300px]">
                                                <h6 className="text-xl font-bold mt-5">Awards</h6>
                                                <ul className="m-5 list-disc">
                                                    {details.awards.map((award, idx) => (
                                                        <li key={idx} className="mb-3">
                                                            <p className="font-bold">
                                                                {award.title} <span className="text-sm">({award.date})</span>
                                                            </p>
                                                            <p className="my-1.5">{award.description}</p>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <h6 className="text-xl font-bold mt-5">Contact</h6>
                                                <div className="m-5">
                                                    <p>Email: {details.contact.email}</p>
                                                    <p>Phone: {details.contact.phone}</p>
                                                    <p>Hospital: {details.contact.hospital}</p>
                                                    <p>Country: {details.contact.country}</p>
                                                    <p>Rating: {details.contact.rating}</p>
                                                    <p>Experience: {details.contact.experience_years} years</p>
                                                </div>

                                                <h6 className="text-xl font-bold mt-5">Specializations</h6>
                                                <ul className="m-5 list-disc">
                                                    {details.specializations.map((spec, idx) => (
                                                        <li key={idx}>{spec}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                {/* Other tabs */}
                                <TabPanel><Locations /></TabPanel>
                                <TabPanel><DocReviews /></TabPanel>
                                <TabPanel><AppointmentSerial /></TabPanel>
                                <TabPanel><BusinessHour /></TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docprofile;
