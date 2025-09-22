import React from 'react';

const AllUsers: React.FC = () => {
    return (
        <div>
            <h2 className='font-bold text-2xl mb-10'>All Users: 3</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black bg-gray-200'>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td> <button className='btn bg-teal-950'>Make Admin</button></td>
                            <td><button className='btn bg-teal-950'>Remove User</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td> <button className='btn bg-teal-950'>Make Admin</button></td>
                            <td><button className='btn bg-teal-950'>Remove User</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td> <button className='btn bg-teal-950'>Make Admin</button></td>
                            <td><button className='btn bg-teal-950'>Remove User</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;