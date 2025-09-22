import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className='max-w-[1280px] mx-auto flex my-10'>
            <div className='w-64 min-h-screen bg-white'>
                <ul className='menu'>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
                                    : "px-3 rounded hover:border-b-0"
                            }
                            to="/dashboard/myappointment"
                        >
                            My Appointments
                        </NavLink>
                    </li>
                    <div className='divider'></div>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
                                : "px-3 rounded hover:border-b-0"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Dashboard;