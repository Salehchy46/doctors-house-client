import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto bg-gray-50 text-gray-800">
            <div className="bg-teal-950 min-h-[300px] text-white py-20">
                <div className="max-w-[1280px] mx-auto text-left py-24">
                    <h1 className="text-4xl font-bold mb-4">Home / About DOC HOUSE</h1>
                    <p className="text-lg opacity-90">
                        Caring for your health with compassion, trust, and innovation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;