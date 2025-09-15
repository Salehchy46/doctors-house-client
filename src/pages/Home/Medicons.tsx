import { FaClock, FaPhone } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';

const Medicons = () => {
    return (
        <div className='grid md:grid-cols-3 gap-3 mx-6'>
            <div className='flex items-center gap-6 bg-teal-700 p-6 rounded-2xl'>
                <FaClock></FaClock>
                <div>
                    <h5 className="text-xl font-semibold">Opening Hours</h5>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-teal-700 p-6 rounded-2xl'>
                <FaLocationPin></FaLocationPin>
                <div>
                    <h5 className="text-xl font-semibold">Our Locations</h5>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-teal-700 p-6 rounded-2xl'>
                <FaPhone></FaPhone>
                <div>
                    <h5 className="text-xl font-semibold">Contact Us</h5>
                    <p>+88 01750 00 00 00 / +88 01750 20 20 20</p>
                </div>
            </div>
        </div>
    );
};

export default Medicons;