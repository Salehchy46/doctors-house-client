import Dashboard from "@/layouts/Dashboard";
import Mainlayout from "@/layouts/Mainlayout";
import About from "@/pages/About/About";
import Appointment from "@/pages/Appointment/Appointment";
import ManageDocs from "@/pages/Dashboard/AdminPanel/ManageDocs";
import MyAppointment from "@/pages/Dashboard/MyAppointment";
import Docprofile from "@/pages/DocProfile/Docprofile";
import Error from "@/pages/ErrorPage/Error";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <div className="bg-white">
            <Error></Error>
        </div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/doctorprofile',
                element: <Docprofile></Docprofile>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>,
            },
            {
                path: '/login',
                element: <div className="bg-gradient-to-r from-teal-950 via-teal-950 to-50% to-white">
                    <Login></Login>
                </div>,
            },
            {
                path: '/register',
                element: <div className="bg-gradient-to-r from-teal-950 via-teal-950 to-50% to-white">
                    <Register></Register>
                </div>,
            }
        ]
    },
    {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/myappointment',
                element: <MyAppointment></MyAppointment>,
            },
            {
                path: '/dashboard/addadoctor',
            },
            {
                path: '/dashboard/managedocs',
                element: <ManageDocs></ManageDocs>
            }
        ]
    }
])