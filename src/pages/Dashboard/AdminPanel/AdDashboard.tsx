import React from 'react';
import ReactAreachart from './RechartAreachart';
import Piechart from './PieChart';
import StatSect from './Stat';

const AdDashboard: React.FC = () => {
    return (
        <div>
            <div className='my-10'>
                <StatSect></StatSect>
            </div>
            <div className='flex gap-5'>
                <div>
                    <ReactAreachart></ReactAreachart>
                </div>
                <div>
                    <Piechart></Piechart>
                </div>
            </div>
        </div>
    );
};

export default AdDashboard;