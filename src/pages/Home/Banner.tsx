import img1 from '../../assets/doc1.jpg';
import img2 from '../../assets/doc2.jpg';
import img3 from '../../assets/doc3.jpg';

const Banner = () => {
    return (
        <section className='hero relative max-w-[1600px] bg-teal-950 mx-auto text-white min-h-screen overflow-hidden'>
            <div className='hero-content flex justify-between'>
                <div className='flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-20 relative z-10'>
                    <div className='flex-1'>
                        <h2 className="text-6xl tracking-wide font-semibold items-center">Your Best Medical Help Center</h2>
                        <p className='my-10 text-[18px]'>No man is a good doctor who has never been sick himself</p>
                        <button className='btn btn-xl p-8 rounded-xl bg-[#F7A582]'>All Service</button>
                    </div>
                    <div className='relative mt-10 md:mt-0 md:w-1/2 flex justify-center'>
                        <div className="absolute right-[450px] top-[450px] hidden md:block opacity-30 ">
                            <svg width="200" height="200" className="text-gray-200">
                                <defs>
                                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="3" cy="3" r="3" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="200" height="200" fill="url(#dots)" />
                            </svg>
                        </div>
                        <div className='card'>
                            <div className='flex-1 space-x-6'>
                                <div>
                                    <div className='absolute top-44 p-56 z-0 rounded-full opacity-25 bg-amber-200 lg:block'></div>
                                </div>
                                <div className='-skew-x-8'>
                                    <img className='p-3 bg-white relative z-20 top-80 right-14 w-80 h-80 object-cover' src={img1} alt="" />
                                </div>
                                <div className='-skew-x-8'>
                                    <img className='p-3 bg-white relative z-10 top-36 left-20 w-80 h-80 object-cover' src={img2} alt="" />
                                </div>
                                <div className='-skew-x-8'>
                                    <img className='p-3 bg-white relative z-30 bottom-96 left-52 w-80 h-80 object-cover' src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;