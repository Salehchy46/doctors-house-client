import React, { useEffect, useState } from "react";

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
    name: string;
    about_me: string;
    education: Education[];
    work_experience: WorkExperience[];
    services: string[];
    awards: Award[];
    specializations: string[];
    contact: Contact;
};

const Overview: React.FC = () => {
    const [details, setDetails] = useState<CvDetails | null>(null);

    useEffect(() => {
        fetch("/jsons/cv.json")
            .then((res) => res.json())
            .then((data: CvDetails) => setDetails(data))
            .catch((err) => console.error(err));
    }, []);

    if (!details) {
        return <div className="min-h-screen text-center items-center">Loading…</div>;
    }

    return (
        <div className="">
            <h6 className="text-xl font-bold mt-5">About Me</h6>
            <p className="my-3">{details.about_me}</p>

            <div className="flex flex-wrap gap-8">
                {/* Left column */}
                <div className="flex-1 min-w-[300px]">
                    {/* Education */}
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

                    {/* Work & Experience */}
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

                    {/* Services */}
                    <h6 className="text-xl font-bold mt-5">Services</h6>
                    <ul className="m-5 list-disc">
                        {details.services.map((srv, idx) => (
                            <li key={idx}>{srv}</li>
                        ))}
                    </ul>

                </div>

                {/* Right column */}
                <div className="flex-1 min-w-[300px]">
                    {/* Awards */}
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

                    {/* Contact */}
                    <h6 className="text-xl font-bold mt-5">Contact</h6>
                    <div className="m-5">
                        <p>Email: {details.contact.email}</p>
                        <p>Phone: {details.contact.phone}</p>
                        <p>Hospital: {details.contact.hospital}</p>
                        <p>Country: {details.contact.country}</p>
                        <p>Rating: {details.contact.rating} </p>
                        <p>Experience: {details.contact.experience_years} years</p>
                    </div>

                    {/* Specializations */}
                    <h6 className="text-xl font-bold mt-5">Specializations</h6>
                    <ul className="m-5 list-disc">
                        {details.specializations.map((spec, idx) => (
                            <li key={idx}>{spec}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;
