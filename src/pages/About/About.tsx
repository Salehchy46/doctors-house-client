'use client'
import React from "react";
import Hero from "./Hero";
import MainCon from "./MainCon";
import CTAsect from "./CTAsect";

const About: React.FC = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="bg-teal-950">
                <Hero></Hero>
            </div>
            {/* Main Seciton */}
            <div className="bg-white">
                <MainCon></MainCon>
            </div>
            {/* CTA Section */}
            <div className="bg-teal-950">
                <CTAsect></CTAsect>
            </div>
        </div>
    );
};

export default About;
