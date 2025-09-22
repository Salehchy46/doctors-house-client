import React from 'react';
import DateSelector from './DatePicker';

const MyAppointment: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between' >
                <div className=''>
                    <h2 className='text-2xl'>My Appointment</h2>
                </div>
                <DateSelector></DateSelector>
            </div>
        </div>
    );
};

export default MyAppointment;