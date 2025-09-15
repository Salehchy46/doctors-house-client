import { FaClock, FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

const Medicons = () => {
    return (
        <div className='max-w-[1600px] mx-auto bg-white py-10 lg:flex-row md:flex flex-col justify-center gap-3'>
            <div className='flex items-center gap-6 bg-teal-950 md:w-96 md:h-48 p-6 rounded-2xl'>
                <FaClock className='text-[36px]'></FaClock>
                <div>
                    <h5 className="text-2xl font-semibold">Opening Hours</h5>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-[#F7A582] md:w-96 md:h-48 p-6 rounded-2xl'>
                <FaLocationPin className='text-[36px]'></FaLocationPin>
                <div>
                    <h5 className="text-2xl font-semibold">Our Locations</h5>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-teal-950 md:w-96 md:h-48 p-6 rounded-2xl'>
                <FaPhone className='text-[36px]'></FaPhone>
                <div>
                    <h5 className="text-2xl font-semibold">Contact Us</h5>
                    <p>+88 01750 00 00 00 / +88 01750 20 20 20</p>
                </div>
            </div>
        </div>
    );
};

export default Medicons;