import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers: React.FC = () => {

    const axiosSecure = useAxiosSecure();

    const {data: users = {}} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    return (
        <div>
            <h2 className='font-bold text-2xl mb-10'>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black bg-gray-200'>
                            <th></th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td> <button className='btn bg-teal-950 text-white'>Make Admin</button></td>
                                <td><button className='btn bg-teal-950 text-white'>Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;