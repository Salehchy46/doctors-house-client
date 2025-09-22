import React, { useRef } from 'react';
import { MdCancel } from "react-icons/md";
import slot1 from '../../assets/appointment/slot1.png';
import slot2 from '../../assets/appointment/slot2.png';
import slot3 from '../../assets/appointment/slot3.png';
import slot4 from '../../assets/appointment/slot4.png';
import slot5 from '../../assets/appointment/slot5.png';

const Slots: React.FC = () => {

    const modalRef = useRef<HTMLDialogElement | null>(null);

    return (
        <div className='max-w-[1280px] mx-auto'>
            <h2 className='text-[40px] font-bold text-center text-black py-10'>Available slots for Teeth Orthodontics.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-5'>
                {/* Slot 1 */}
                <div className="card text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slot1}
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[25px] font-bold">Teeth Orthodontics</h2>
                        <p className='font-semibold'>8:00 AM - 9:00 AM</p>
                        <div className="card-actions">
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]">Book Appointment</button>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_1" ref={modalRef} className="modal">
                                <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
                                    <div className='flex pb-8 justify-between items-center'>
                                        <h3 className="font-bold text-lg">Cavity Protection</h3>
                                        <div className="">
                                            <form method="dialog">
                                                <button><MdCancel className='font-bold text-3xl text-teal-950'></MdCancel></button>
                                            </form>
                                        </div>
                                    </div>
                                    <form action="">
                                        <input className='input bg-gray-100 w-[430px] font-bold' placeholder='April 30, 2020' />
                                        <input className='input bg-gray-100 w-[430px] my-4 font-bold' placeholder='10:05 am - 11:30 am' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px]' placeholder='Full Name' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] my-4' placeholder='Mobile' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] mb-4' placeholder='Email' />
                                        <input type="submit" className='btn w-[430px] bg-teal-950 py-2' />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                {/* Slot 2 */}
                <div className="card text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slot2}
                            alt="Shoes"
                            className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[25px] font-bold">Cosmetic Dentistry</h2>
                        <p className='font-semibold'>10.05 AM - 11:30 AM</p>
                        <div className="card-actions">
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]">Book Appointment</button>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_2" ref={modalRef} className="modal">
                                <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
                                    <div className='flex pb-8 justify-between items-center'>
                                        <h3 className="font-bold text-lg">Cavity Protection</h3>
                                        <div className="">
                                            <form method="dialog">
                                                <button><MdCancel className='font-bold text-3xl text-teal-950'></MdCancel></button>
                                            </form>
                                        </div>
                                    </div>
                                    <form action="">
                                        <input className='input bg-gray-100 w-[430px] font-bold' placeholder='April 30, 2020' />
                                        <input className='input bg-gray-100 w-[430px] my-4 font-bold' placeholder='10:05 am - 11:30 am' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px]' placeholder='Full Name' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] my-4' placeholder='Mobile' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] mb-4' placeholder='Email' />
                                        <input type="submit" className='btn w-[430px] bg-teal-950 py-2' />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                {/* Slot 3 */}
                <div className="card text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slot3}
                            alt="Shoes"
                            className="p-8 rounded-full bg-pink-50" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[25px] font-bold">Teeth Cleaning</h2>
                        <p className='font-semibold'>8:00 AM - 9:00 AM</p>
                        <div className="card-actions">
                            <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]">Book Appointment</button>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_3" ref={modalRef} className="modal">
                                <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
                                    <div className='flex pb-8 justify-between items-center'>
                                        <h3 className="font-bold text-lg">Cavity Protection</h3>
                                        <div className="">
                                            <form method="dialog">
                                                <button><MdCancel className='font-bold text-3xl text-teal-950'></MdCancel></button>
                                            </form>
                                        </div>
                                    </div>
                                    <form action="">
                                        <input className='input bg-gray-100 w-[430px] font-bold' placeholder='April 30, 2020' />
                                        <input className='input bg-gray-100 w-[430px] my-4 font-bold' placeholder='10:05 am - 11:30 am' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px]' placeholder='Full Name' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] my-4' placeholder='Mobile' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] mb-4' placeholder='Email' />
                                        <input type="submit" className='btn w-[430px] bg-teal-950 py-2' />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                {/* Slot 4 */}
                <div className="card text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slot4}
                            alt="Shoes"
                            className="p-10 rounded-full bg-pink-50" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[25px] font-bold">Teeth Orthodontics</h2>
                        <p className='font-semibold'>8:00 AM - 9:00 AM</p>
                        <div className="card-actions">
                            <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]">Book Appointment</button>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_4" ref={modalRef} className="modal">
                                <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
                                    <div className='flex pb-8 justify-between items-center'>
                                        <h3 className="font-bold text-lg">Cavity Protection</h3>
                                        <div className="">
                                            <form method="dialog">
                                                <button><MdCancel className='font-bold text-3xl text-teal-950'></MdCancel></button>
                                            </form>
                                        </div>
                                    </div>
                                    <form action="">
                                        <input className='input bg-gray-100 w-[430px] font-bold' placeholder='April 30, 2020' />
                                        <input className='input bg-gray-100 w-[430px] my-4 font-bold' placeholder='10:05 am - 11:30 am' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px]' placeholder='Full Name' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] my-4' placeholder='Mobile' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] mb-4' placeholder='Email' />
                                        <input type="submit" className='btn w-[430px] bg-teal-950 py-2' />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                {/* Slot 5 */}
                <div className="card text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={slot5}
                            alt="Shoes"
                            className="p-8 rounded-full bg-pink-50" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[25px] font-bold">Teeth Orthodontics</h2>
                        <p className='font-semibold'>8:00 AM - 9:00 AM</p>
                        <div className="card-actions">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-xl bg-[#F7A582] border-0 hover:border-2 rounded-xl hover:bg-transparent hover:border-[#F7A582] hover:text-[#F7A582]">Book Appointment</button>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_5" ref={modalRef} className="modal">
                                <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[480px]">
                                    <div className='flex pb-8 justify-between items-center'>
                                        <h3 className="font-bold text-lg">Cavity Protection</h3>
                                        <div className="">
                                            <form method="dialog">
                                                <button><MdCancel className='font-bold text-3xl text-teal-950'></MdCancel></button>
                                            </form>
                                        </div>
                                    </div>
                                    <form action="">
                                        <input className='input bg-gray-100 w-[430px] font-bold' placeholder='April 30, 2020' />
                                        <input className='input bg-gray-100 w-[430px] my-4 font-bold' placeholder='10:05 am - 11:30 am' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px]' placeholder='Full Name' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] my-4' placeholder='Mobile' />
                                        <input type="text" className='input bg-white border border-gray-300 w-[430px] mb-4' placeholder='Email' />
                                        <input type="submit" className='btn w-[430px] bg-teal-950 py-2' />
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slots;