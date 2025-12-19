import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto bg-gray-50 text-gray-800">
            <div className="bg-teal-950 min-h-[300px] text-white py-20">
                <div className="max-w-[1280px] mx-auto text-left py-24">
                    <p className="">Home / About</p>
                    <h2 className="text-5xl font-bold opacity-90">
                        About Doc House
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;