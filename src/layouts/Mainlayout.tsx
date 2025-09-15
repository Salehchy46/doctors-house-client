import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar'
import Footer from '@/shared/Footer';

const Mainlayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;