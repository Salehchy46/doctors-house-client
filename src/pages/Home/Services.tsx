import docimage from '../../assets/docimg.jpg'

const Services = () => {
    return (
        <div className='hero max-w-[1600px] mx-auto bg-white dark:bg-white text-black dark:text-black'>
            <div className='hero-content lg:flex-wrap flex-col py-20'>
                <div className='flex-1 m-6'>
                    <img src={docimage} className='rounded-xl w-[550px] h-[1050]' alt="" />
                </div>
                <div className='flex-1 card m-6'>
                    <h3 className="text-[40px] font-bold">Our Services</h3>
                    <p className='my-6 text-[16px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className='invisible md:visible flex justify-between'>
                        <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] p-2'>Cavity Protection</button>
                        <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] p-2'>Cavity Observation</button>
                        <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] p-2'>Oral Surgery</button>
                    </div>
                    <div className='md:hidden flex justify-between rounded-xl'>
                        <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] p-2'>Gastrology</button>
                        <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] p-2'>Orthopadic</button>
                    </div>
                    <img
                        className='card-actions rounded-xl my-6 w-[550px] h-[350px]'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGyl8IUm9_yPfzz3cRCxx_IkzUgI22lrn8Q&s"
                        alt="" />
                    <h3 className="text-2xl font-bold">Electro  Gastrology Therapy</h3>
                    <p className='mt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className='mb-6'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className="btn btn-xl bg-white border-[#F7A582] text-[#F7A582]">All Services</button>
                </div>
                <div className='card md:hidden m-6'>
                    <img className='card-actions rounded-xl w-[550px] h-[350px]' src="https://www.nimshospital.com/assets/img/departments/GASTROENTEROLOGY.png" alt="" />
                    <h3 className="text-2xl font-bold mt-6">Electro  Gastrology Therapy</h3>
                    <p className='mt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;