import React from 'react';

const MainCon: React.FC = () => {
    return (
        <div className="w-full max-w-[1280px] mx-auto pt-10 text-gray-800">
            {/* Main Content */}
            <div className="max-w-[1280px] bg-gray-100 rounded-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl font-bold text-teal-900 mb-6">
                        Who We Are
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        At <span className="font-semibold">DOC HOUSE</span>, we believe healthcare
                        should be accessible, reliable, and centered around patients.
                        With a team of experienced doctors, specialists, and healthcare
                        professionals, we provide trusted medical guidance and services
                        tailored to your needs.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Our mission is to make quality healthcare simple and approachable —
                        whether through in-person consultations, telemedicine, or personalized
                        patient care. We are dedicated to building long-term relationships
                        with our patients, based on trust, transparency, and care.
                    </p>
                    <p className="leading-relaxed">
                        With advanced technology, modern facilities, and a compassionate
                        approach, DOC HOUSE is more than a clinic — it’s your trusted
                        healthcare partner.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src="https://gov-web-sing.s3.ap-southeast-1.amazonaws.com/uploads/2023/1/Wordpress-featured-images-48-1672795987342.jpg"
                        alt="About DOC HOUSE"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-white py-16">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="text-3xl font-bold text-teal-950 mb-10">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-6 bg-gray-100 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                            <p>
                                We treat every patient with kindness, empathy, and respect.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p>
                                Delivering high-quality care with experienced doctors
                                and modern facilities.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                            <p>
                                Using technology and research to make healthcare accessible
                                and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainCon;