import Mainlayout from "@/layouts/Mainlayout";
import About from "@/pages/About/About";
import Appointment from "@/pages/Appointment/Appointment";
import Home from "@/pages/Home/Home";
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
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
])