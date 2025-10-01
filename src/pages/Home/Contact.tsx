import React from "react";
import { SlCallOut } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface ContactForm {
    name: string;
    email: string;
    mobile: string;
    doctorsName: string;
    date: string;
    time: string;
}

const ContactForm: React.FC = () => {

    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactForm>();

    const handleAppointmentBook = (data: ContactForm) => {
        const contactInfo = {
            name: data.name,
            email: data.email,
            number: data.mobile,
            doctorsName: data.doctorsName,
            date: data.date,
            time: data.time,
        }

        axiosSecure.post('/appointments', contactInfo)
            .then(res => {
                console.log(res);
                if (res.data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Appointment Submitted Successfully.',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    reset();
                };
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                });
            })
    }

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
                    <form className="space-y-4" onSubmit={handleSubmit(handleAppointmentBook)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                {...register('mobile', { required: true })}
                                type="text"
                                placeholder="Mobile Number"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                            {errors.mobile && <span className="text-red-600">Mobile is required</span>}
                            <input
                                {...register('doctorsName', {required: true})}
                                type="text"
                                placeholder="Doctor Name"
                                className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                            />
                            {errors.doctorsName && <span className="text-red-600">Doctors Name is required</span>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative">
                                <input
                                    {...register('date', {required: true})}
                                    type="date"
                                    placeholder="Date"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300 pr-10"
                                />
                                {errors.date && <span className="text-red-600">Date is required</span>}
                            </div>

                            <div className="relative">
                                <input
                                    {...register('time', {required: true})}
                                    type="time"
                                    placeholder="Time"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300 pr-10"
                                />
                                {errors.time && <span className="text-red-600">Time is required</span>}
                            </div>
                        </div>
                        <input type="submit" className='btn btn-xl w-full rounded-md bg-[#F7A582] hover:bg-transparent hover:border-[#F7A582]' value='Book Now' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
