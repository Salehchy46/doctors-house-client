'use client'
import React from 'react';
import frame1 from '../../assets/frame1.png';
import frame2 from '../../assets/frame2.png';
import { Link } from 'react-router-dom';


// Main Component
const Register: React.FC = () => {
    return (
        <div className="max-w-[1280px] mx-auto min-h-screen flex">
            {/* Left side - Image/Branding */}
            <div className='hero-content bg-teal-950 w-full'>
                <div className="lg:flex bg-teal-950 relative">
                    <img className='w-[570px] h-[570px] relative top-16 left-10' src={frame2} alt="" />
                    <img className='w-[460px] h-80 relative right-72 bottom-40' src={frame1} alt="" />
                </div>
            </div>
            {/* Right side - Login Form */}
            <div className="w-full bg-white text-black items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Form */}

                </div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full max-w-sm shrink-0 shadow-xl">
                            <div className="w-[460px] max-w-sm shadow-xl shrink-0 ">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold p-5">Sign up to DOC HOUSE</h2>
                                </div>
                                <div className="card-body p-10">
                                    <form action="">
                                        <fieldset className="fieldset">
                                            <label className="label text-xl font-semibold">Email</label>
                                            <input type="email" className="input bg-gray-100" placeholder="Enter your Email" />
                                            <div className='flex justify-between items-center'>
                                                <label className="label text-xl font-semibold">Password</label>
                                                <div><a className="link link-hover text-[#F7A582]">Forgot password?</a></div>
                                            </div>
                                            <input type="password" className="input bg-gray-100" placeholder="Enter your Password" />
                                            <button className="btn btn-lg py-5 border-0 bg-[#F7A582] mt-4">Create Account</button>
                                        </fieldset>
                                    </form>
                                    <p className='text-[18px] text-center'>Please register at first. Go to <Link to='/register' className='text-[#F7A582] font-bold'>SIGN UP</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
