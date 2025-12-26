import React from 'react';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

interface User {
  _id?: string;
  email: string;
  username: string;
  role?: string;
}

interface ApiResponse {
  modifiedCount?: number;
  matchedCount?: number;
  message?: string;
  acknowledged?: boolean;
}

const AllUsers: React.FC = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch, isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get<User[]>('/users');
      return res.data;
    },
  });

  // Debug: Check what data we're receiving
  console.log('Users data:', users);

  const handleMakeAdmin = async (user: User) => {
    if (!user._id) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Invalid user data",
      });
      return;
    }

    try {
      const res = await axiosSecure.patch<ApiResponse>(`/users/admin/${user._id}`);
      console.log('Full admin update response:', res);
      console.log('Response data:', res.data);

      // Check different possible response structures
      if (res.data.modifiedCount && res.data.modifiedCount > 0) {
        await refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.username} has been promoted to admin.`,
          showConfirmButton: false,
          timer: 1500
        });
      } else if (res.data.acknowledged) {
        // Some MongoDB responses use 'acknowledged' instead
        await refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.username} has been promoted to admin.`,
          showConfirmButton: false,
          timer: 1500
        });
      } else if (res.data.message) {
        // Backend sent a message but no modification
        Swal.fire({
          icon: "info",
          title: "Info",
          text: res.data.message,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "No Changes",
          text: "User role was not updated.",
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error making admin:', error);
      
      // Handle different error types
      if (error.response?.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Permission Denied",
          text: "You don't have permission to make users admin.",
        });
      } else if (error.response?.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Please log in again.",
        });
      } else {
        const message = error.response?.data?.message || 'Failed to promote user to admin';
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      }
    }
  }

  // Add loading and error states
  if (isLoading) {
    return <span className="loading loading-spinner loading-xl mx-auto flex justify-center my-[209px]"></span>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold text-2xl mb-10">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black bg-gray-200">
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <span className={`font-semibold ${
                    user.role === "admin" ? "text-green-600" : "text-blue-600"
                  }`}>
                    {user.role === "admin" ? "Admin" : "User"}
                  </span>
                </td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-teal-950 text-white hover:bg-teal-800"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;