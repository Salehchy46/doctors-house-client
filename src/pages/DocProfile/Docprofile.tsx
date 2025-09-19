import React from 'react';
import Hero from './Hero';
import DocDetail from './DocDetail';
import Resume from './Resume';

const Docprofile: React.FC = () => {
    return (
        <div className=''>
            <div className='bg-teal-950'>
                <div className='max-w-[1280px] mx-auto'>
                    <Hero></Hero>
                </div>
            </div>
            <div className='bg-gray-100'>
                <div className='pt-28 pb-10 text-black max-w-[1280px] mx-auto'>
                    <DocDetail></DocDetail>
                </div>
            </div>
            <div className='bg-gray-100'>
                <div className='-100 max-w-[1280px] mx-auto text-black'>
                    <Resume></Resume>
                </div>
            </div>
        </div>
    );
};

export default Docprofile;