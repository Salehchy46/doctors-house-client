import React, { useState, useRef, useEffect } from "react";
import { MdCancel } from 'react-icons/md';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
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

interface SlotData {
    id: string;
    image: string;
    title: string;
    time: string;
    modalTitle: string;
    date: string;
    hasBackground?: boolean;
}

interface FormData {
    fullName: string;
    mobile: string;
    email: string;
}

interface ServiceData {
    id: number;
    name: string;
    image: string;
    bgColor: string;
}

interface SlotCardProps {
    slot: SlotData;
    openModal: (id: string) => void;
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent, slotId: string) => void;
}

// SlotCard Component
const SlotCard: React.FC<SlotCardProps> = ({
    slot,
    openModal,
    formData,
    handleInputChange,
    handleSubmit
}) => {
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
                    <button
                        onClick={() => openModal(slot.id)}
                        className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]"
                    >
                        Book Appointment
                    </button>

                    {/* Modal */}
                    <dialog id={`modal_${slot.id}`} className="modal">
                        <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
                            <div className="flex pb-8 justify-between items-center">
                                <h3 className="font-bold text-lg">{slot.modalTitle}</h3>
                                <form method="dialog">
                                    <button type="button">
                                        <MdCancel className="font-bold text-3xl text-teal-950" />
                                    </button>
                                </form>
                            </div>

                            <form onSubmit={(e) => handleSubmit(e, slot.id)}>
                                <input
                                    className="input bg-gray-100 w-full font-bold"
                                    placeholder={slot.date}
                                    readOnly
                                />
                                <input
                                    className="input bg-gray-100 w-full my-4 font-bold"
                                    placeholder={slot.time}
                                    readOnly
                                />
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="input bg-white border border-gray-300 w-full"
                                    placeholder="Full Name"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="input bg-white border border-gray-300 w-full my-4"
                                    placeholder="Mobile"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="input bg-white border border-gray-300 w-full mb-4"
                                    placeholder="Email"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn w-full bg-teal-950 py-2 text-white"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

// Slots Component
const Slots: React.FC<{ slotData: SlotData[] }> = ({ slotData }) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        mobile: '',
        email: ''
    });

    const openModal = (id: string) => {
        const dialog = document.getElementById(`modal_${id}`) as HTMLDialogElement | null;
        dialog?.showModal();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent, slotId: string) => {
        e.preventDefault();
        console.log('Form submitted for slot:', slotId, formData);
        setFormData({ fullName: '', mobile: '', email: '' });
        const dialog = document.getElementById(`modal_${slotId}`) as HTMLDialogElement | null;
        dialog?.close();
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
                        openModal={openModal}
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                    />
                ))}
            </div>
        </div>
    );
};

// Main CalendarHero Component
const CalendarHero: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const servicesRef = useRef<HTMLDivElement>(null);
    const slotsRef = useRef<HTMLDivElement>(null);
    const [hasSelectedDate, setHasSelectedDate] = useState(false);
    const [hasSelectedService, setHasSelectedService] = useState(false);
    const navigate = useNavigate();

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
            modalTitle: 'Cavity Protection',
            date: 'April 30, 2020'
        },
        {
            id: '2',
            image: slot2,
            title: 'Cosmetic Dentistry',
            time: '10:05 AM - 11:30 AM',
            modalTitle: 'Cavity Protection',
            date: 'April 30, 2020'
        },
        {
            id: '3',
            image: slot3,
            title: 'Teeth Cleaning',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Cavity Protection',
            date: 'April 30, 2020',
            hasBackground: true
        },
        {
            id: '4',
            image: slot4,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Cavity Protection',
            date: 'April 30, 2020',
            hasBackground: true
        },
        {
            id: '5',
            image: slot5,
            title: 'Teeth Orthodontics',
            time: '8:00 AM - 9:00 AM',
            modalTitle: 'Cavity Protection',
            date: 'April 30, 2020',
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
    const handleServiceClick = (service: ServiceData) => {
        setHasSelectedService(true);
        
        // If you still want to navigate, you can do it here
        // navigate('/book-appointment', {
        //     state: {
        //         service: service,
        //         date: selectedDate,
        //         formattedDate: formatSelectedDate(selectedDate)
        //     }
        // });
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
                                onClick={() => handleServiceClick(service)}
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
                <Slots slotData={slotData} />
            </div>
        </>
    );
};

export default CalendarHero;