import React, { useEffect, useState } from "react";
import { SlCallOut } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from "react-select";

interface DoctorOption {
    value: string;
    label: string;
}

interface ContactForm {
    name: string;
    email: string;
    mobile: string;
    doctorsName: string;
    doctorId: string;
    date: string;
    time: string;
}

const ContactForm: React.FC = () => {
    const axiosSecure = useAxiosSecure();
    const [doctorOptions, setDoctorOptions] = useState<DoctorOption[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<DoctorOption | null>(null);
    const [loadingDoctors, setLoadingDoctors] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm<ContactForm>();

    // Fetch doctors from backend
    useEffect(() => {
        const fetchDoctors = async () => {
            setLoadingDoctors(true);
            try {
                const response = await axiosSecure.get("/doctors");
                const doctors = response.data;
                const options = doctors.map((doc: unknown) => ({
                    value: (doc as { _id: string })._id,
                    label: (doc as { name: string }).name
                }));
                setDoctorOptions(options);
            } catch (error) {
                console.error("Failed to load doctors:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Could not load doctor list. Please refresh."
                });
            } finally {
                setLoadingDoctors(false);
            }
        };
        fetchDoctors();
    }, [axiosSecure]);

    const handleDoctorChange = (option: DoctorOption | null) => {
        setSelectedDoctor(option);
        if (option) {
            setValue("doctorsName", option.label); // hidden field for name
            setValue("doctorId", option.value);    // hidden field for ID
        } else {
            setValue("doctorsName", "");
            setValue("doctorId", "");
        }
    };

    const handleAppointmentBook = (data: ContactForm) => {
        // data already contains doctorsName and doctorId from setValue
        const contactInfo = {
            name: data.name,
            email: data.email,
            number: data.mobile,
            doctorsName: data.doctorsName,
            doctorId: data.doctorId,
            date: data.date,
            time: data.time,
        };

        axiosSecure.post("/contactAppointment", contactInfo)
            .then((res) => {
                if (res.data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Appointment Submitted Successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    reset();
                    setSelectedDoctor(null); 
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response?.data?.message || error.message,
                });
            });
    };

    return (
        <section className="flex justify-center py-12">
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
                            <SlCallOut className="mr-3 text-2xl" />
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
                            <div>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                                />
                                {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                            </div>
                            <div>
                                <input
                                    {...register("email", { required: "Email is required" })}
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                                />
                                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    {...register("mobile", { required: "Mobile number is required" })}
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                                />
                                {errors.mobile && <span className="text-red-600 text-sm">{errors.mobile.message}</span>}
                            </div>
                            <div>
                                <Select
                                    options={doctorOptions}
                                    isLoading={loadingDoctors}
                                    placeholder="Select a doctor..."
                                    value={selectedDoctor}
                                    onChange={handleDoctorChange}
                                    className="text-black bg-teal-950"
                                    classNamePrefix="react-select"
                                    isClearable
                                    isSearchable
                                    noOptionsMessage={() => "No doctors found"}
                                />
                                {/* Hidden fields to store selected doctor name and ID */}
                                <input
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300" 
                                    type="hidden" {...register("doctorsName", { required: true })} 
                                />
                                <input 
                                    className="input input-bordered w-full bg-teal-950 text-white placeholder-gray-300"
                                    type="hidden" {...register("doctorId", { required: true })}
                                 />
                                {errors.doctorsName && <span className="text-red-600 text-sm">Please select a doctor</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    {...register("date", { required: "Date is required" })}
                                    type="date"
                                    className="input input-bordered w-full bg-teal-950 text-white"
                                />
                                {errors.date && <span className="text-red-600 text-sm">{errors.date.message}</span>}
                            </div>
                            <div>
                                <input
                                    {...register("time", { required: "Time is required" })}
                                    type="time"
                                    className="input input-bordered w-full bg-teal-950 text-white"
                                />
                                {errors.time && <span className="text-red-600 text-sm">{errors.time.message}</span>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-xl w-full rounded-md bg-[#F7A582] hover:bg-transparent hover:border-[#F7A582] text-white"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;