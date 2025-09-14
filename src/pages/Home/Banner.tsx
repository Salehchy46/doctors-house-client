import img1 from '../../assets/doc1.jpg';
import img2 from '../../assets/doc2.jpg';
import img3 from '../../assets/doc3.jpg';

const Banner = () => {
    return (
        <section className='hero relative max-w-[1600px] mx-auto text-white min-h-screen overflow-hidden'>
            <div className='hero-content flex justify-between'>
                <div className='flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-20 relative z-10'>
                    <div className='flex-1'>
                        <h2 className="text-6xl tracking-wide font-semibold items-center">Your Best Medical Help Center</h2>
                        <p className='my-10 text-[18px]'>No man is a good doctor who has never been sick himself</p>
                        <button className='btn btn-xl p-8 rounded-xl bg-[#F7A582]'>All Service</button>
                    </div>
                    <div className='relative mt-10 md:mt-0 md:w-1/2 flex justify-center'>
                        <div className="absolute -left-16 top-1/3 hidden md:block opacity-30 w-80">
                            <svg width="120" height="120" className="text-gray-200">
                                <defs>
                                    <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <circle cx="1" cy="1" r="1" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="120" height="120" fill="url(#dots)" />
                            </svg>
                        </div>
                        <div className='card'>
                            <div className='flex-1 flex space-x-6 z-10'>
                                <div>
                                    <div className='absolute left-36 bottom-20 p-44 z-0 rounded-full opacity-25 bg-amber-200 lg:block'></div>
                                </div>
                                <div className='-skew-x-8 lg:block'>
                                    <img className='p-3 bg-white  relative z-10 left-24 bottom-10 w-80 h-80 object-cover' src={img1} alt="" />
                                </div>
                                <div className='-skew-x-8 lg:block'>
                                    <img className='p-3 bg-white  relative z-20 top-20 w-80 h-80 object-cover' src={img2} alt="" />
                                </div>
                                <div className='-skew-x-8  lg:block'>
                                    <img className='p-3 bg-white relative z-30 right-20 bottom-28  w-80 h-80 object-cover' src={img3} alt="" />
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