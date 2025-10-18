import React from 'react';
import Heading from '@/components/sharedComponents/Heading';
import { CiLocationOn, CiCalendar, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import useAxiosPublic from '@/components/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

interface Doctor {
  _id?: string;
  name: string;
  specialty: string;
  image: string;
  country: string;
  avialable: string;
  visit: string | number;
  rating: number;
}

const Experts: React.FC = () => {
  const axiosPublic = useAxiosPublic();

  const { data: doctors = [] } = useQuery<Doctor[]>({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await axiosPublic.get<Doctor[]>('/expertDoctors');
      return res.data;
    },
  });

  return (
    <div className="max-w-[1280px] mx-auto text-black bg-white">
      <Heading
        title="Our Expert Doctors"
        subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
      />

      {/* Show only first 3 doctors */}
      <div className="hero">
        <div className="hero-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
          {doctors.slice(0, 3).map((doctor) => (
            <div key={doctor._id || doctor.name} className="card shadow-sm w-96 mx-auto">
              <figure>
                <img src={doctor.image} alt={doctor.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{doctor.name}</h2>
                <p>{doctor.specialty}</p>
                <div className="rating rating-sm flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name={`rating-${doctor._id}`}
                      className="mask mask-star bg-orange-400"
                      aria-label={`${star} star`}
                      checked={Math.round(doctor.rating) === star}
                      readOnly
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">
                    {doctor.rating?.toFixed(1) || "N/A"}
                  </span>
                </div>
                <div className="divider-horizontal"></div>
                <div className="flex gap-3 items-center">
                  <CiLocationOn />
                  <p>{doctor.country}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <CiCalendar />
                  <p>{doctor.avialable}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <CiDollar />
                  <p>{doctor.visit}</p>
                </div>
                <div className="card-actions">
                  <Link to={`/doctorprofile/${doctor._id}`} className="w-full">
                    <button className="w-full btn btn-xl bg-white border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button that navigates to all doctors page */}
      <div className="text-center mt-8">
        <Link to="/alldoctors">
          <button className="btn btn-xl bg-white border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white">
            More Doctors
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experts;
