import React from 'react';
import DateSelector from './DatePicker';

const MyAppointment: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between items-center text-black' >
                <div className=''>
                    <h2 className='text-2xl font-bold mb-10'>My Appointment</h2>
                </div>
                <DateSelector></DateSelector>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-gray-200 text-black'>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>07/09/25</td>
                            <td>09:20</td>
                            <td>Cavity Protection</td>
                            <td>
                                <p className='text-[#F7A582]'>Paid</p>
                                <p>id : dfadfjlaksdjf24sdfds</p>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>09/09/25</td>
                            <td>09:20</td>
                            <td>Cavity Protection</td>
                            <td>
                                <div className="card-actions">
                                    <button
                                        className='btn bg-teal-950'
                                        onClick={() => document.getElementById('my_modal_1').showModal()}>Pay</button>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[430px]">
                                            <div className='items-center'>
                                                <p className='font-bold text-[#F7A582] text-[16px]'>Hello, Awlad</p>
                                                <h3 className='font-bold text-xl my-3'>Please Pay for Tech Cleaning</h3>
                                                <p>Your Appointment: <span className='text-[#F0AA22]'>Nov 09, 2022</span> at 08.00 AM - 08.30 AM</p>
                                                <h3 className='text-xl font-bold my-3'>Please Pay: $200</h3>
                                            </div>
                                            <div className='border-t border-2 border-gray-200 mr-3'></div>
                                            <form action="">
                                                <input type="number" className='input input-lg bg-white border border-gray-300 w-[380px] my-4' placeholder='Card Number' />
                                                <input type="date" className='input input-lg bg-white border border-gray-300 w-[380px] my-4' placeholder='DD/MM/YY'/>
                                                <input type="submit" value='Pay' className='btn w-[380px] bg-teal-950 py-2' /> 
                                            </form>
                                        </div>
                                    </dialog>
                                </div>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>09/09/25</td>
                            <td>09:20</td>
                            <td>Cavity Protection</td>
                            <td>
                                <div className="card-actions">
                                    <button
                                        className='btn bg-teal-950'
                                        onClick={() => document.getElementById('my_modal_2').showModal()}>Pay</button>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="px-5 pb-5 pt-2 rounded-xl bg-white w-[430px]">
                                            <div className='items-center'>
                                                <p className='font-bold text-[#F7A582] text-[16px]'>Hello, Awlad</p>
                                                <h3 className='font-bold text-xl my-3'>Please Pay for Tech Cleaning</h3>
                                                <p>Your Appointment: <span className='text-[#F0AA22]'>Nov 09, 2022</span> at 08.00 AM - 08.30 AM</p>
                                                <h3 className='text-xl font-bold my-3'>Please Pay: $200</h3>
                                            </div>
                                            <div className='border-t border-2 border-gray-200 mr-3'></div>
                                            <form action="">
                                                <input type="number" className='input input-lg bg-white border border-gray-300 w-[380px] my-4' placeholder='Card Number' />
                                                <input type="date" className='input input-lg bg-white border border-gray-300 w-[380px] my-4' placeholder='DD/MM/YY'/>
                                                <input type="submit" value='Pay' className='btn w-[380px] bg-teal-950 py-2' /> 
                                            </form>
                                        </div>
                                    </dialog>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;