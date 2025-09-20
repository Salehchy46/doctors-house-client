import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar'
import Footer from '@/shared/Footer';

const Mainlayout = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')

    return (
        <div className=''>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <div className='bg-gray-300'>
                <Footer></Footer>
            </div>}
        </div>
    );
};

export default Mainlayout;