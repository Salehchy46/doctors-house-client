import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';

interface Appointment {
    _id: string;
    name?: string;
    fullName?: string;
    mobile?: string;
    number?: string;
    time?: string;
    scheduledTime?: string;
    doctorsName: string;
    email?: string;
    date?: string;
}

const AllAppointment: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const response = await axiosSecure.get('/contactAppointment');
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            Swal.fire('Error', 'Failed to load appointments', 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This appointment will be permanently deleted.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await axiosSecure.delete(`/contactAppointment/${id}`);
                Swal.fire('Deleted!', 'Appointment has been deleted.', 'success');
                // Refresh the list
                fetchAppointments();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                console.error('Delete error:', error);
                Swal.fire('Error!', error.response?.data?.message || 'Deletion failed', 'error');
            }
        }
    };

    if (loading) {
        return <div className="min-h-screen mt-100 w-20 mx-auto my-auto text-teal-950"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" stroke-dasharray="80" stroke-dashoffset="80"><animate attributeName="stroke-dashoffset" values="80;0;80" dur="1.5s" repeatCount="indefinite"></animate></path></svg></div>
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Appointments : {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-black">
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Appointment Time</th>
                            <th>Doctor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={appointment._id}>
                                <td>{index + 1}</td>
                                <td>{appointment.name || appointment.fullName || 'N/A'}</td>
                                <td>{appointment.mobile || appointment.number || 'N/A'}</td>
                                <td>{appointment.time || appointment.scheduledTime || 'N/A'}</td>
                                <td>{appointment.doctorsName || 'N/A'}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(appointment._id)}
                                        className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {appointments.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No appointments found.</p>
                )}
            </div>
        </div>
    );
};

export default AllAppointment;