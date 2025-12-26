import React, { useEffect, useState } from 'react';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  image?: string;
  email?: string;
  location?: string;
}

interface DeleteForm {
  doctorId: string;
}

interface ApiResponse {
  message?: string;
  deletedCount?: number;
  acknowledged?: boolean;
}

const ManageDocs: React.FC = () => {
  const axiosSecure = useAxiosSecure();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Use form for delete operations
  const { register, handleSubmit, setValue, reset } = useForm<DeleteForm>();

  // Fetch doctors
  useEffect(() => {
    setLoading(true);
    axiosSecure.get<Doctor[]>('/doctors')
      .then(res => {
        console.log(res.data);
        setDoctors(res.data);
      })
      .catch((err: Error) => console.error('Error fetching doctors:', err))
      .finally(() => setLoading(false));
  }, [axiosSecure]);

  // Delete doctor function using useForm
  const onDeleteSubmit = async (data: DeleteForm): Promise<void> => {
    const doctorId = data.doctorId;
    const doctorToDelete = doctors.find(d => d._id === doctorId);
    
    if (!doctorToDelete) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Doctor not found!',
      });
      return;
    }

    // Confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete Dr. ${doctorToDelete.name}. This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });

    if (!result.isConfirmed) {
      reset();
      return;
    }

    // Show loading state
    Swal.fire({
      title: 'Deleting...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Make DELETE request
      const res = await axiosSecure.delete<ApiResponse>(`/doctors/${doctorId}`);
      console.log('Delete response:', res.data);
      
      // Remove doctor from state
      setDoctors(prevDoctors => prevDoctors.filter(d => d._id !== doctorId));
      
      // Reset form
      reset();
      
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: `Dr. ${doctorToDelete.name} has been deleted successfully.`,
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error: unknown) {
      console.error('Error deleting doctor:', error);
      
      let errorMessage = 'Failed to delete doctor. Please try again.';
      
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const axiosError = error as { 
          response?: { 
            status?: number; 
            data?: { message?: string } 
          } 
        };
        
        if (axiosError.response?.status === 403) {
          errorMessage = 'You do not have permission to delete doctors.';
        } else if (axiosError.response?.status === 401) {
          errorMessage = 'Please log in again to perform this action.';
        } else if (axiosError.response?.data?.message) {
          errorMessage = axiosError.response.data.message;
        }
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Delete Failed',
        text: errorMessage,
      });
      
      reset();
    }
  };

  // Handle delete button click - set doctor ID and submit form
  const handleDeleteClick = (doctorId: string): void => {
    setValue('doctorId', doctorId);
    
    // Trigger form submission after a small delay to ensure value is set
    setTimeout(() => {
      const form = document.getElementById('deleteDoctorForm') as HTMLFormElement;
      if (form) {
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }, 100);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <span className="loading loading-spinner loading-xl mx-auto flex justify-center my-[209px]"></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-10">
        Manage Doctors : {doctors.length}
      </h2>

      {/* Hidden form for delete operations */}
      <form 
        id="deleteDoctorForm"
        onSubmit={handleSubmit(onDeleteSubmit)} 
        style={{ display: 'none' }}
      >
        <input
          type="hidden"
          {...register('doctorId', { required: true })}
        />
      </form>

      {doctors.length === 0 && !loading ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No doctors found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* Head */}
            <thead>
              <tr className="text-black bg-gray-100">
                <th>SL No.</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id} className="hover:bg-gray-50">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-full h-12 w-12">
                          <img
                            src={doctor.image || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                            alt={doctor.name}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{doctor.name}</div>
                        {doctor.location && (
                          <div className="text-sm text-gray-500">{doctor.location}</div>
                        )}
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="badge badge-ghost badge-sm bg-blue-100 text-blue-800">
                      {doctor.specialty || "Not Specified"}
                    </span>
                  </td>

                  <td className="font-medium">{doctor.email || "N/A"}</td>

                  <td>
                    <button
                      className="btn btn-sm bg-[#E11244] border-0 text-white hover:bg-red-700"
                      onClick={() => handleDeleteClick(doctor._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageDocs;