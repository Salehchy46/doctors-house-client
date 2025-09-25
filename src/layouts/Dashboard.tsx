import Header from '@/shared/Navbar';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {

    const isAdmin = true;

    return (
        <div className='bg-gradient-to-r from-20% from-white to-30% to-gray-100'>
            <Header></Header>
            <div className='max-w-[1280px] bg-gray-100 mx-auto flex text-black'>
                <div className='w-[300px] min-h-screen bg-white'>
                    <ul className='menu'>
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/addashboard' className={({ isActive }) =>
                                            isActive
                                                ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                : "rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                        }>
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allusers' className={({ isActive }) =>
                                            isActive
                                                ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                : "px-3 rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                        }>
                                            All Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addadoctor' className={({ isActive }) =>
                                            isActive
                                                ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                : "px-3 rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                        }>
                                            Add A Doctor
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/managedocs' className={({ isActive }) =>
                                            isActive
                                                ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                : "px-3 rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                        }>
                                            Manage Doctors
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                    : "px-3 rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                            }
                                            to="/"
                                        >
                                            Home
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
                                                    ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                    : "px-3 rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                            }
                                        >
                                            My Appointments
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "bg-gray-100 w-[300px] h-14 text-xl font-bold align-middle flex items-center text-center"
                                                    : "px-3 rounded text-xl font-bold align-middle flex items-center h-14 text-center"
                                            }
                                            to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
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