import React from "react";
import { CalendarIcon, Clock } from "lucide-react"; // lucide-react icons
import { SlCallOut } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const ContactForm: React.FC = () => {
    return (
        <section className=" flex justify-center py-12">
            <div className="hero max-w-[1280px] bg-teal-950 text-white rounded-xl">
                <div className="hero-content grid md:grid-cols-2 gap-8 p-20">
                    {/* LEFT INFO */}
                    <div>
                        <h2 className="text-[40px] font-bold mb-4">Contact With Us</h2>
                        <p className="mb-6 text-gray-200">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi.
                        </p>

                        <div className="flex items-center mb-4">
                            <SlCallOut className="mr-3 text-2xl"></SlCallOut>
                            <span className="text-sm md:text-base">+88 01750 14 14 14</span>
                        </div>
                        <div className="flex items-center">
                            <CiLocationOn className="mr-3 text-2xl" />
                            <span className="text-sm md:text-base">
                                Dhanmondi, Dhaka, Bangladesh
                            </span>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="Doctor Name"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300 pr-10"
                                />
                                <CalendarIcon className="absolute right-3 top-3.5 h-5 w-5 text-gray-300" />
                            </div>

                            <div className="relative">
                                <input
                                    type="time"
                                    placeholder="Time"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300 pr-10"
                                />
                                <Clock className="absolute right-3 top-3.5 h-5 w-5 text-gray-300" />
                            </div>
                        </div>



                        <button className='btn btn-xl w-full p-8 rounded-md bg-[#F7A582] hover:bg-transparent hover:border-[#F7A582]'>Book Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
