import { Link } from 'react-router-dom';
import docimage from '../../assets/docimg.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Services = () => {
    return (
        <div className='hero max-w-[1600px] mx-auto bg-white dark:bg-white text-black dark:text-black'>
            <div className='hero-content lg:flex md:flex-row flex-col py-20'>
                <div className='flex-1'>
                    <img src={docimage} className='rounded-xl w-[550px] h-[1050]' alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className="text-[40px] font-bold">Our Services</h3>
                    <p className='my-6 text-[16px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <Tabs>
                        <div className='invisible md:visible'>
                            <TabList className='border-0 flex justify-between'>
                                <Tab 
                                    className='border-0 rounded-xl bg-[#F7A582] hover:bg-transparent hover:border-[#F7A582]'
                                    selectedClassName='bg-transparent border-[#F7A582] '>
                                    <button className=' w-[170px] h-[80px] text-[18px] border-2 border-[#F7A582] rounded-xl font-bold'>Cavity Guard</button>
                                </Tab>
                                <Tab 
                                    className='border-0 rounded-xl bg-[#F7A582] hover:bg-transparent hover:border-[#F7A582]'
                                    selectedClassName='bg-transparent border-[#F7A582] '>
                                    <button className=' w-[170px] h-[80px] text-[18px] border-2 border-[#F7A582] rounded-xl font-bold'>Cavity Outlook</button>
                                </Tab>
                                <Tab 
                                    className='border-0 rounded-xl bg-[#F7A582] hover:bg-transparent hover:border-[#F7A582]'
                                    selectedClassName='bg-transparent '>
                                    <button className='w-[170px] h-[80px] text-[18px]border-2 border-[#F7A582] rounded-xl font-bold'>Oral Surgery</button>
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <img
                                    className='card-actions rounded-xl my-6 w-[550px] h-[350px]'
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGyl8IUm9_yPfzz3cRCxx_IkzUgI22lrn8Q&s"
                                    alt="" />
                                <h3 className="text-2xl font-bold">Cavity Guard</h3>
                                <p className='my-6'>
                                    Polo Park Dental - Best Ways to Keep Your Night Guard Clean ...A teeth cavity guard is most commonly known as a dental sealant, a thin, liquid plastic material applied to the chewing surfaces of back teeth to create a smooth barrier against plaque and acids, preventing decay. Another type of guard is a mouthguard or nightguard, which is a custom-fit device worn to protect against tooth grinding (bruxism) or to prevent injuries from sports. </p>

                            </TabPanel>
                            <TabPanel>
                                <img className='card-actions rounded-xl my-6 w-[550px] h-[350px]' src="https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/313/2018/08/cavity-768x512.jpg" alt="" />
                                <h2 className='text-2xl font-bold'>Cavity Outlook</h2>
                                <p className='my-6'>The outlook for a cavity depends on prompt treatment; while most cavities don't cause long-term issues with regular dental care, untreated cavities can lead to severe infection, pain, tooth loss, or even a fatal abscess if they spread throughout the body. Early-stage cavities may appear as white, brown, or black spots, progressing to visible holes as decay deepens.  Regular dental check-ups, daily brushing and flossing, a low-sugar diet, and professional fluoride treatments are key to preventing and managing cavities. </p>
                            </TabPanel>
                            <TabPanel>
                                <img className='card-actions rounded-xl my-6 w-[550px] h-[350px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQJwop_5ohIShPoPDMe89oFmgtxMnvTosXA&s" alt="" />
                                <h2 className='text-2xl font-bold'>Oral Surgery</h2>
                                <p className="my-6">Oral surgery is the medical specialty focused on surgically treating diseases and conditions of the mouth, jaw, face, and neck, often involving complex procedures beyond routine dental care. Common procedures include wisdom tooth removal, dental implants, bone and gum grafts, and treatments for facial trauma, oral tumors, and TMJ disorders. Oral and maxillofacial surgeons (OMS) are specialists with dual medical and dental qualifications who bridge the gap between medicine and dentistry.  </p>
                            </TabPanel>
                        </div>
                        <div className='md:hidden flex justify-between rounded-xl'>
                            <Tab>
                                <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] hover:bg-transparent hover:border-2 hover:border-[#F7A582]'>Gastrology</button>
                            </Tab>
                            <Tab>
                                <button className='rounded-xl w-[170px] h-[80px] text-[18px] font-bold bg-[#F7A582] hover:bg-transparent hover:border-2 hover:border-[#F7A582]'>Orthopadic</button>
                            </Tab>

                        </div>
                        <div className='hidden md:visible'>

                        </div>
                        <div className='card md:hidden m-6'>
                            <TabPanel>
                                <img className='card-actions rounded-xl w-[550px] h-[350px]' src="https://www.nimshospital.com/assets/img/departments/GASTROENTEROLOGY.png" alt="" />
                                <h3 className="text-2xl font-bold mt-6">Electro  Gastrology Therapy</h3>
                                <p className='mt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                                <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                            </TabPanel>
                        </div>
                    </Tabs>
                    <Link to='/appointment'><button className="btn btn-xl bg-white border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white">All Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;