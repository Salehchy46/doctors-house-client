import React, { useEffect, useState } from 'react';
import useAxiosSecure from '@/components/hooks/useAxiosSecure';

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  image?: string;
  email?: string;
  location?: string;
}

const ManageDocs: React.FC = () => {
  const axiosSecure = useAxiosSecure();
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    axiosSecure.get('/doctors')
      .then(res => {
        console.log(res.data);
        setDoctors(res.data);
      })
      .catch(err => console.error('Error fetching doctors:', err));
  }, [axiosSecure]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-10">
        Manage Doctors : {doctors.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Head */}
          <thead>
            <tr className="text-black">
              <th>SL No.</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-full h-12 w-12">
                        <img
                          src={doctor.image || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                          alt={doctor.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doctor.name}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <span className="badge badge-ghost badge-sm">
                    {doctor.specialty || "Not Specified"}
                  </span>
                </td>

                <td>{doctor.email || "N/A"}</td>

                <th>
                  <button
                    className="font-bold bg-[#E11244] btn btn-sm border-0 text-white hover:bg-red-700"
                    onClick={() => console.log(`Delete ${doctor._id}`)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDocs;
