import React, { useState, useRef, useEffect } from "react";
import { MdCancel } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import chair1 from '../../assets/chair1.png';
import service1 from '../../assets/appointment/service1.png';
import service2 from '../../assets/appointment/service2.png';
import service3 from '../../assets/appointment/service3.png';
import service4 from '../../assets/appointment/service4.png';
import service5 from '../../assets/appointment/service5.png';
import service6 from '../../assets/appointment/service6.png';
import slot1 from '../../assets/appointment/slot1.png';
import slot2 from '../../assets/appointment/slot2.png';
import slot3 from '../../assets/appointment/slot3.png';
import slot4 from '../../assets/appointment/slot4.png';
import slot5 from '../../assets/appointment/slot5.png';
import { useForm } from "react-hook-form";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import Swal from "sweetalert2";

interface SlotData {
    id: string;
    image: string;
    title: string;
    time: string;
    modalTitle: string;
    hasBackground?: boolean;
}

interface FormData {
    modalTitle: string;
    fullName: string;
    mobile: string;
    email: string;
    date: string;
    time: string;
}

interface ServiceData {
    id: number;
    name: string;
    image: string;
    bgColor: string;
}

interface SlotCardProps {
    slot: SlotData;
    selectedDate: string;
    onFormSubmit: (data: FormData, slotId: string) => void;
}

// SlotCard Component
const SlotCard: React.FC<SlotCardProps> = ({
    slot,
    selectedDate,
    onFormSubmit
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<FormData>();

    const modalRef = useRef<HTMLDivElement>(null);
    const axiosSecure = useAxiosSecure();

    // Set default values when modal opens
    const openModal = () => {
        setValue("modalTitle", slot.modalTitle);
        setValue("date", selectedDate);
        setValue("time", slot.time);
    };

    const onSubmit = async (data: FormData) => {
        try {
            // Prepare all data to send to backend
            const appointmentData = {
                // Form data from user input
                fullName: data.fullName,
                mobile: data.mobile,
                email: data.email,

                // Slot data
                service: data.modalTitle,
                scheduledTime: data.time,
                appointmentDate: data.date,

                // Additional slot information
                slotId: slot.id,
                slotTitle: slot.title,
                slotImage: slot.image,

                // Timestamp for when appointment was booked
                bookedAt: new Date().toISOString(),

                // Status (you might want to set initial status)
                status: 'pending' // or 'confirmed', 'completed', etc.
            };

            // Post to backend API
            const response = await axiosSecure.post('/appointments', appointmentData);

            // If successful, call the parent callback and reset form
            onFormSubmit(data, slot.id);
            reset();
            handleCloseModal();

            // Optional: Handle success response
            console.log('Appointment created successfully:', response.data);
            Swal.fire({
                title: "Appointment booked successfully",
                icon: "success",
                draggable: true
            });

        } catch (error) {
            // Handle error
            console.error('Error creating appointment:', error);
            Swal.fire({
                title: "Failed to book an appointment!",
                icon: "error",
                draggable: false
            });
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleCloseModal = () => {
        reset();
        const modal = document.getElementById(`modal_${slot.id}`) as HTMLInputElement;
        if (modal) modal.checked = false;
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleCloseModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleCloseModal]);

    return (
        <div className="card text-black shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={slot.image}
                    alt={slot.title}
                    className={slot.hasBackground ? "p-8 rounded-full bg-pink-50" : ""}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[25px] font-bold">{slot.title}</h2>
                <p className="font-semibold">{slot.time}</p>
                <div className="card-actions">
                    {/* Modal opener button */}
                    <label
                        htmlFor={`modal_${slot.id}`}
                        className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582] cursor-pointer"
                        onClick={openModal}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>

            {/* DaisyUI Modal with black background */}
            <input type="checkbox" id={`modal_${slot.id}`} className="modal-toggle" />
            <div className="modal">
                <div
                    ref={modalRef}
                    className="modal-box w-11/12 max-w-2xl bg-white text-black relative"
                >
                    {/* Close button - fixed position */}
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 text-teal-950 rounded-full p-2 z-50 transition-colors duration-200"
                    >
                        <MdCancel className="text-xl" />
                    </button>

                    <div className="flex justify-between items-center pb-4">
                        <h3 className="font-bold text-xl">{slot.modalTitle}</h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="space-y-4">
                            {/* Date Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-gray-100 text-black border-gray-300"
                                    readOnly
                                    {...register("date", { required: "Date is required" })}
                                />
                                {errors.date && (
                                    <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
                                )}
                            </div>

                            {/* Scheduled Time Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Time</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-gray-100 text-black border-gray-300"
                                    readOnly
                                    {...register("time", { required: "Time is required" })}
                                />
                                {errors.time && (
                                    <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
                                )}
                            </div>

                            {/* Service Title Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-gray-100 text-black border-gray-300"
                                    readOnly
                                    {...register("modalTitle", { required: "Service title is required" })}
                                />
                                {errors.modalTitle && (
                                    <p className="text-red-400 text-sm mt-1">{errors.modalTitle.message}</p>
                                )}
                            </div>

                            {/* Full Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-white text-black border-gray-300 focus:border-[#F7A582] focus:ring-1 focus:ring-[#F7A582]"
                                    placeholder="Enter your full name"
                                    {...register("fullName", {
                                        required: "Full name is required",
                                        minLength: {
                                            value: 2,
                                            message: "Full name must be at least 2 characters"
                                        }
                                    })}
                                />
                                {errors.fullName && (
                                    <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Mobile Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                                <input
                                    type="tel"
                                    className="input input-bordered w-full bg-white text-black border-gray-300 focus:border-[#F7A582] focus:ring-1 focus:ring-[#F7A582]"
                                    placeholder="Enter your mobile number"
                                    {...register("mobile", {
                                        required: "Mobile number is required",
                                        pattern: {
                                            value: /^[0-9+\-\s()]+$/,
                                            message: "Please enter a valid mobile number"
                                        }
                                    })}
                                />
                                {errors.mobile && (
                                    <p className="text-red-400 text-sm mt-1">{errors.mobile.message}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full bg-white text-black border-gray-300 focus:border-[#F7A582] focus:ring-1 focus:ring-[#F7A582]"
                                    placeholder="Enter your email address"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email address"
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="modal-action mt-6">
                            <button
                                type="submit"
                                className="btn bg-teal-950 text-white w-full border-0 hover:bg-teal-800"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Slots Component
const Slots: React.FC<{ slotData: SlotData[]; selectedDate: string }> = ({ slotData, selectedDate }) => {
    const handleFormSubmit = (data: FormData, slotId: string) => {
        console.log('Form submitted for slot:', slotId);
        console.log('Form data:', {
            service: data.modalTitle,
            date: data.date,
            time: data.time,
            fullName: data.fullName,
            mobile: data.mobile,
            email: data.email
        });
        // Close the modal
        const modal = document.getElementById(`modal_${slotId}`) as HTMLInputElement;
        if (modal) modal.checked = false;
    };

    return (
        <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[40px] font-bold text-center text-black py-10">
                Available slots for Teeth Orthodontics.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-5">
                {slotData.map((slot) => (
                    <SlotCard
                        key={slot.id}
                        slot={slot}
                        selectedDate={selectedDate}
                        onFormSubmit={handleFormSubmit}
                    />
                ))}
            </div>
        </div>
    );
};

// Main CalendarHero Component remains the same...
const CalendarHero: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const servicesRef = useRef<HTMLDivElement>(null);
    const slotsRef = useRef<HTMLDivElement>(null);
    const [hasSelectedDate, setHasSelectedDate] = useState(false);
    const [hasSelectedService, setHasSelectedService] = useState(false);

    // Services data
    const services: ServiceData[] = [
        {
            id: 1,
            name: "Teeth Orthodontics",
            image: service1,
            bgColor: "bg-pink-100"
        },
        {
            id: 2,
            name: "Cosmetic Dentistry",
            image: service2,
            bgColor: "bg-pink-50"
        },
        {
            id: 3,
            name: "Teeth Cleaning",
            image: service3,
            bgColor: "bg-pink-100"
        },
        {
            id: 4,
            name: "Cavity Protection",
            image: service4,
            bgColor: "bg-blue-100"
        },
        {
            id: 5,
            name: "Pediatric Dental",
            image: service5,
            bgColor: "bg-pink-100"
        },
        {
            id: 6,
            name: "Oral Surgery",
            image: service6,
            bgColor: "bg-amber-100"
        }
    ];

    // Slots data
    const slotData: SlotData[] = [
        {
            id: '1',
            image: slot1,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Teeth Orthodontics'
        },
        {
            id: '2',
            image: slot2,
            title: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            modalTitle: 'Cosmetic Dentistry'
        },
        {
            id: '3',
            image: slot3,
            title: 'Teeth Cleaning',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Teeth Cleaning',
            hasBackground: true
        },
        {
            id: '4',
            image: slot4,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Teeth Orthodontics',
            hasBackground: true
        },
        {
            id: '5',
            image: slot5,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Teeth Orthodontics',
            hasBackground: true
        }
    ];

    const formatSelectedDate = (date: Date | null) => {
        if (!date) return "";
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Handle date selection and scroll to services
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        setHasSelectedDate(true);
    };

    // Handle service selection and scroll to slots
    const handleServiceClick = () => {
        setHasSelectedService(true);
    };

    // Scroll to services when a date is selected
    useEffect(() => {
        if (hasSelectedDate && servicesRef.current) {
            setTimeout(() => {
                servicesRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
            setHasSelectedDate(false);
        }
    }, [hasSelectedDate]);

    // Scroll to slots when a service is selected
    useEffect(() => {
        if (hasSelectedService && slotsRef.current) {
            setTimeout(() => {
                slotsRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
            setHasSelectedService(false);
        }
    }, [hasSelectedService]);

    return (
        <>
            <div className="text-black py-28">
                <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                    {/* Calendar side */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-96">
                            <div className="">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    inline
                                    className="react-datepicker-custom w-full"
                                    renderCustomHeader={({
                                        monthDate,
                                        decreaseMonth,
                                        increaseMonth,
                                    }) => (
                                        <div className="flex justify-between items-center mb-4">
                                            <button
                                                aria-label="Previous Month"
                                                className="btn btn-ghost btn-sm"
                                                onClick={decreaseMonth}
                                                type="button"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <span className="text-lg font-bold">
                                                {monthDate.toLocaleString('en-US', {
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                            <button
                                                aria-label="Next Month"
                                                className="btn btn-ghost btn-sm"
                                                onClick={increaseMonth}
                                                type="button"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image side */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={chair1}
                            alt="Clinic chair"
                            className="rounded-xl shadow-lg w-full max-w-[590px] h-[350px] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Services Section with ref for scrolling */}
            <div ref={servicesRef} className="py-12 scroll-mt-8">
                <div className="max-w-[1280px] mx-auto px-6">
                    <p className='text-[22px] text-center text-[#F7A582]'>
                        Available Services on {formatSelectedDate(selectedDate)}
                    </p>
                    <h3 className='text-[40px] text-center font-bold text-black mt-2'>
                        Please select a service.
                    </h3>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-20'>
                        {services.map((service) => (
                            <button
                                key={service.id}
                                className='flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transform duration-200 w-full text-left'
                                onClick={handleServiceClick}
                                type="button"
                            >
                                <div className={`p-4 ${service.bgColor} rounded-xl flex-shrink-0`}>
                                    <img src={service.image} className='w-14 h-14' alt={service.name} />
                                </div>
                                <h4 className='text-2xl font-bold text-black'>{service.name}</h4>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slots Section with ref for scrolling */}
            <div ref={slotsRef} className="scroll-mt-8">
                <Slots
                    slotData={slotData}
                    selectedDate={formatSelectedDate(selectedDate)}
                />
            </div>
        </>
    );
};

export default CalendarHero;