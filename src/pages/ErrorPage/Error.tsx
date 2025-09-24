import React from 'react';
import error from '../../assets/error.png'
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
    return (
        <div className='hero max-w-[1280px] bg-white mx-auto min-h-screen'>
            <div className='hero-content flex-col'>
                <div className='text-center'>
                    <h2 className='text-[48px] font-bold text-black'>Error,</h2>
                    <h3 className='text-[40px] text-gray-400'>This page is not found.</h3>
                </div>
                <img src={error} alt="" />
                <Link to='/' className='bg-[#F7A582] btn btn-xl border-0 hover:bg-transparent hover:text-[#F7A582] hover:border-2 hover:border-[#F7A582]'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;