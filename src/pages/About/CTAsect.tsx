import React from 'react';
import { Link } from 'react-router-dom';

const CTAsect: React.FC = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto bg-gray-50 text-gray-800">
            {/* CTA Section */}
            <div className="bg-teal-950 text-white py-16">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-4">
                        Your Health, Our Priority
                    </h2>
                    <p className="mb-6">
                        Join the DOC HOUSE family today and experience healthcare designed
                        around you.
                    </p>
                    <Link to='/appointment'>
                        <button className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-white">
                            Book an Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CTAsect;