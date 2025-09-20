import Mainlayout from "@/layouts/Mainlayout";
import About from "@/pages/About/About";
import Appointment from "@/pages/Appointment/Appointment";
import Docprofile from "@/pages/DocProfile/Docprofile";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
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
])