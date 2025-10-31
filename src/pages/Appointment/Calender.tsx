import React, { useState, useRef, useEffect } from "react";
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

const CalendarHero: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const servicesRef = useRef<HTMLDivElement>(null);
    const [hasSelectedDate, setHasSelectedDate] = useState(false);
    const navigate = useNavigate();

    // Services data as objects
    const services = [
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

    // Handle service selection and navigation
    const handleServiceClick = (service: typeof services[0]) => {
        // Navigate to next component with service and date data
        navigate('/book-appointment', {
            state: {
                service: service,
                date: selectedDate,
                formattedDate: formatSelectedDate(selectedDate)
            }
        });
    };

    // Scroll to services when a date is selected
    useEffect(() => {
        if (hasSelectedDate && servicesRef.current) {
            // Small timeout to ensure the state update is complete
            setTimeout(() => {
                servicesRef.current?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
            
            // Reset the flag
            setHasSelectedDate(false);
        }
    }, [hasSelectedDate]);

    return (
        <>
            <div className="text-black py-28">
                <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                    {/* Calendar side */}
                    <div className="flex-1 flex justify-center">
                        <div className=" w-96">
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
            <div ref={servicesRef} className=" py-12 scroll-mt-8">
                <div className="max-w-[1280px] mx-auto px-6">
                    <p className='text-[22px] text-center text-[#F7A582]'>
                        Available Services on {formatSelectedDate(selectedDate)}
                    </p>
                    <h3 className='text-[40px] text-center font-bold text-black mt-2'>
                        Please select a service.
                    </h3>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-20'>
                        {/* Dynamic Service Buttons */}
                        {services.map((service) => (
                            <button
                                key={service.id}
                                className='flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transform duration-200 w-full text-left'
                                onClick={() => handleServiceClick(service)}
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
        </>
    );
};

export default CalendarHero;