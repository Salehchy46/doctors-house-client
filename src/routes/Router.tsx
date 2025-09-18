import Mainlayout from "@/layouts/Mainlayout";
import About from "@/pages/About/About";
import Appointment from "@/pages/Appointment/Appointment";
import Docprofile from "@/pages/DocProfile/Docprofile";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
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
                element: <Login></Login>,
            },
        ]
    },
])