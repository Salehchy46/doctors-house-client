// TestAppointment.tsx

import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';

interface Appointment {
  _id: string;
  fullName: string;
  mobile: string;
  email: string;
  service: string;
  scheduledTime: string;
  appointmentDate: string;
  slotId?: string;
  slotTitle?: string;
  status?: string;
  createdAt?: string;
}

const TestAppointment: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axiosSecure.get('/appointments');
      setAppointments(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error fetching appointments:', error);
      Swal.fire('Error', error.response?.data?.message || 'Failed to load appointments', 'error');
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
        await axiosSecure.delete(`/appointments/${id}`);
        Swal.fire('Deleted!', 'Appointment has been deleted.', 'success');
        fetchAppointments(); // refresh list
      } 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (error: any) {
        console.error('Delete error:', error);
        Swal.fire('Error!', error.response?.data?.message || 'Deletion failed', 'error');
      }
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading appointments...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Appointments : {appointments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-black">
              <th>Serial</th>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt, idx) => (
              <tr key={apt._id} >
                <td>{idx + 1}</td>
                <td>{apt.fullName}</td>
                <td>{apt.email}</td>
                <td>{apt.mobile}</td>
                <td>{apt.service}</td>
                <td>{apt.appointmentDate}</td>
                <td>{apt.scheduledTime}</td>
                <td>
                  <button
                    onClick={() => handleDelete(apt._id)}
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

export default TestAppointment;