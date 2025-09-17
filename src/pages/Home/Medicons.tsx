import { SlCallOut } from "react-icons/sl";
import { CiClock2,  CiLocationOn  } from "react-icons/ci";

const Medicons = () => {
    return (
        <div className='max-w-[1600px] mx-auto bg-white py-10 lg:flex-row md:flex flex-col justify-center gap-12'>
            <div className='flex items-center gap-6 bg-teal-950 text-white md:w-96 md:h-48 p-6 rounded-2xl'>
                <CiClock2 className='text-[36px]'></CiClock2>
                <div>
                    <h5 className="text-2xl font-semibold mb-3">Opening Hours</h5>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-[#F7A582] md:w-96 md:h-48 p-6 rounded-2xl'>
                <CiLocationOn className='text-[36px]'></CiLocationOn>
                <div>
                    <h5 className="text-2xl font-semibold">Our Locations</h5>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='flex items-center gap-6 bg-teal-950 text-whitef md:w-96 md:h-48 p-6 rounded-2xl'>
                <SlCallOut className='text-[36px]'></SlCallOut>
                <div>
                    <h5 className="text-2xl font-semibold">Contact Us</h5>
                    <p>+88 01750 00 00 00 / +88 01750 20 20 20</p>
                </div>
            </div>
        </div>
    );
};

export default Medicons;