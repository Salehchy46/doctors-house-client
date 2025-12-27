import React, { useEffect, useState } from 'react';

interface Appointment {
    _id: string;
    name: string;
    fullName: string;
    mobile: string;
    number: string;
    time: string;
    scheduledTime: string;
    doctorsName: string;
}

const AllAppointment: React.FC = () => {

    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then((data: Appointment[]) => setAppointments(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2 className='text-2xl font-bold'>All Appointment : {appointments.length}</h2>
            <div>
                <div className='overflow-x-auto'>
                    <table className='table'>
                        <thead>
                            <tr className='text-black'>
                                <th>Serial</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Appointment Time</th>
                                <th>Doctor</th>
                            </tr>
                        </thead>
                        {
                            appointments.map((appointment, index) =>
                                <tbody>
                                    <tr>
                                        <th>{++index}</th>
                                        <td>{appointment.name || appointment.fullName}</td>
                                        <td>{appointment.mobile || appointment.number}</td>
                                        <td>{appointment.time || appointment.scheduledTime}</td>
                                        <td>{appointment.doctorsName}</td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllAppointment;