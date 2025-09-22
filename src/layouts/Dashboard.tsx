import Header from '@/shared/Navbar';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {

    const isAdmin = true;

    return (
        <div className='bg-white'>
            <Header></Header>
            <div className='max-w-[1280px] bg-white mx-auto flex pl-5 py-10 text-black'>
                <div className='w-64 min-h-screen bg-white'>
                    <ul className='menu'>
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard' className={({ isActive }) =>
                                            isActive
                                                ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
                                                : "px-3 rounded hover:border-b-0"
                                        }>
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/managedocs' className={({ isActive }) =>
                                            isActive
                                                ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
                                                : "px-3 rounded hover:border-b-0"
                                        }>
                                            Manage Doctors
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myappointment"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "border-b-2 pb-3 border-[#F7A582] px-3 rounded"
                                                    : "px-3 rounded hover:border-b-0"
                                            }
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
                                </>
                        }
                    </ul>
                </div>
                {/* Dashboard Navigation Content */}
                <div className='flex-1 p-8'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;