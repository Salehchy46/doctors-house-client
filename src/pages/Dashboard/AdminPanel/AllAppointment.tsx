import React, { useEffect, useState } from 'react';

interface Appointment {
    _id: string;
    name: string;
    mobile: string;
    number: string;
    time: string;
    scheduledTime: string;
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
                {
                    appointments.map((appointment, index) => <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Appointment Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{index}</th>
                                    <td>{appointment.name}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllAppointment;