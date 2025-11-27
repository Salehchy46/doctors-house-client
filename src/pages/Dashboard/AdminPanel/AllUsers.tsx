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

const AllUsers: React.FC = () => {
  const axiosSecure = useAxiosSecure();

  // useQuery typed return
  const { data: users = [], refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get<User[]>('/users');
      return res.data;
    },
  });

  const handleMakeAdmin = (user: User) => {
    if (!user._id) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Invalid user data",
      });
      return;
    }

    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log('Admin update response:', res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.username} has been promoted to admin.`,
            showConfirmButton: false,
            timer: 1500
          });
        } else if (res.data.matchedCount === 0) {
          Swal.fire({
            icon: "error",
            title: "User Not Found",
            text: "The user you're trying to promote doesn't exist.",
          });
        }
      })
      .catch(error => {
        console.error('Error making admin:', error);
        const message = error.response?.data?.message || 'Failed to promote user to admin';
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      });
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
                <td>{user.role === "admin" ? "Admin" : "User"}</td>
                <td>
                  {user.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-teal-950 text-white"
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
