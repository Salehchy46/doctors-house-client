import React from 'react';
import service1 from '../../assets/appointment/service1.png';
import service2 from '../../assets/appointment/service2.png';
import service3 from '../../assets/appointment/service3.png';
import service4 from '../../assets/appointment/service4.png';
import service5 from '../../assets/appointment/service5.png';
import service6 from '../../assets/appointment/service6.png';

const Service: React.FC = () => {
    return (
        <div className=''>
            <p className='text-[22px] text-center text-[#F7A582]'>Available Services on April 30, 2022</p>
            <h3 className='text-[40px] text-center font-bold text-black'>Please select a service.</h3>
            <div className='max-w-[1280px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 py-20'>
                <div className='flex justify-between items-center gap-3 max-w-[360px] bg-white p-5 rounded-xl shadow-xl'>
                    <div className='p-5 bg-pink-200 rounded-xl'>
                        <img src={service1} className='w-14 h-14' alt="" />
                    </div>
                    <h4 className='text-2xl font-bold text-black'>Teeth Orthodontics</h4>
                </div>
                <div className='flex justify-between items-center gap-3 max-w-[360px] bg-white p-5 rounded-xl shadow-xl'>
                    <div className='p-5 bg-pink-50 rounded-xl'>
                        <img src={service2} className='w-14 h-14' alt="" />
                    </div>
                    <h4 className='text-2xl font-bold text-black'>Cosmetic Dentisty</h4>
                </div>
                <div className='flex justify-between items-center gap-3 max-w-[360px] bg-white p-5 rounded-xl shadow-xl'>
                    <div className='p-5 bg-pink-100 rounded-xl'>
                        <img src={service3} className='w-14 h-14' alt="" />
                    </div>
                    <h4 className='text-2xl font-bold text-black'>Teeth Cleaning</h4>
                </div>
                <div className='flex justify-between items-center gap-3 max-w-[360px] bg-white p-5 rounded-xl shadow-xl'>
                    <div className='p-5 bg-blue-100 rounded-xl'>
                        <img src={service4} className='w-14 h-14' alt="" />
                    </div>
                    <h4 className='text-2xl font-bold text-black'>Cavity Protection</h4>
                </div>
                <div className='flex justify-between items-center gap-3 max-w-[360px] bg-white p-5 rounded-xl shadow-xl'>
                    <div className='p-5 bg-pink-100 rounded-xl'>
                        <img src={service5} className='w-14 h-14' alt="" />
                    </div>
                    <h4 className='text-2xl font-bold text-black'>Pediatric Dental</h4>
                </div>
                <div className='flex justify-between items-center gap-3 max-w-[360px] bg-white p-5 rounded-xl shadow-xl'>
                    <div className='p-5 bg-amber-100 rounded-xl'>
                        <img src={service6} className='w-14 h-14' alt="" />
                    </div>
                    <h4 className='text-2xl font-bold text-black'>Oral Surgery</h4>
                </div>
            </div>
        </div>
    );
};

export default Service;