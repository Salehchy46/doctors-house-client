import React from 'react';
import ReactAreachart from './RechartAreachart';

const AdDashboard: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='flex gap-5'>
                <div>
                    <ReactAreachart></ReactAreachart>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default AdDashboard;