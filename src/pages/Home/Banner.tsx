import img1 from '../../assets/doc1.jpg';
import img2 from '../../assets/doc2.jpg';
import img3 from '../../assets/doc3.jpg';

const Banner = () => {
    return (
        <section className='relative bg-teal-950 text-white overflow-hidden'>
            <div className='flex justify-between'>
                <div className='flex-1'>
                    <h2 className="text-3xl font-bold items-center">Your Best Medical Help Center</h2>
                    <p className='my-3'>No man is a good doctor who has never been sick himself</p>
                    <button className='btn bg-[#F7A582]'>All Service</button>
                </div>
                <div className='flex-1 flex space-x-6 z-10'>
                    <div className='bg-white p-2 transform rotate-[-2deg] hidden lg:block'>
                        <img className='w-40 h-52 object-cover rounded-lg' src={img1} alt="" />
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-2 transform rotate-[3deg] hidden lg:block'>
                        <img className='w-40 h-52 object-cover rounded-lg' src={img2} alt="" />
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-2 transform rotate-[-2deg] hidden lg:block'>
                        <img className='w-40 h-52 object-cover rounded-lg' src={img3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;