import React from "react";
import 'cally';
import chair1 from '../../assets/chair1.png';

const CalendarHero: React.FC = () => {
    return (
        <div className=" text-black py-28">
            <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                {/* Calendar side */}
                <div className="flex-1 flex justify-center">
                    <calendar-date class="cally shadow-lg rounded-box w-96 h-80">
                        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                        <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                        <calendar-month></calendar-month>
                    </calendar-date>
                </div>

                {/* Image side */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={chair1}
                        alt="Clinic chair"
                        className="rounded-xl shadow-lg w-full max-w-[590] h-[350]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendarHero;
