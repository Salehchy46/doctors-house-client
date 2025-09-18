import React from 'react';
import doctor from '../../assets/doctor1.png'
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const DocDetail: React.FC = () => {

    return (
        <div className='hero bg-white min-h-[450px] rounded-xl flex'>
            <div className='hero-content'>
                <div>
                    <img src={doctor} className='w-[350px] h-96 object-cover rounded-xl m-5' alt="" />
                </div>
                <div>
                    <h3 className='text-[40px] font-bold'>Dr. Ruby Perrin</h3>
                    <p className='my-1.5'>MBBS, MD - General Medicine</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="2 star" />
                        <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-5" className="mask mask-star bg-orange-400" aria-label="5 star" defaultChecked />
                    </div>
                    <div className='flex my-1.5 gap-3'>
                        <CiLocationOn></CiLocationOn>
                        <p>Dhanmondi, Dhaka, Bangladesh - <Link to='/' className='text-[#F7A582]'>Get Directions</Link></p>
                    </div>
                    <div className='flex max-w-[460px] mb-3 gap-3'>
                        <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                        <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                        <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                        <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                        <div className='w-20 p-16 rounded-xl bg-gray-100'></div>
                    </div>
                    <div className='flex gap-3'>
                        <h5 className='text-xl p-3 text-center font-semibold text-[#6C6B6B] border rounded-xl border-[#6C6B6B]'>Dental Filling</h5>
                        <h5 className='text-xl p-3 text-center font-semibold text-[#6C6B6B] border rounded-xl border-[#6C6B6B]'>Teeth Whitening</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocDetail;