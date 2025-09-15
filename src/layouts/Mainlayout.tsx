import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar'
import Footer from '@/shared/Footer';

const Mainlayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='bg-gray-300'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;