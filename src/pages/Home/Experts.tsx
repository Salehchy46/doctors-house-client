import React, { useState } from 'react';
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
  avialable: string; // keep as your API
  visit: string | number;
}

const Experts: React.FC = () => {
  const axiosSecure = useAxiosPublic();
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const { data: doctors = [] } = useQuery<Doctor[]>({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await axiosSecure.get<Doctor[]>('/expertDoctors');
      return res.data;
    },
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 more each click
  };

  return (
    <div className="max-w-[1600px] mx-auto text-black bg-white">
      <Heading
        title="Our Expert Doctors"
        subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
      />
      <div className="hero">
        <div className="hero-content  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-10">
          {doctors.slice(0, visibleCount).map((doctor) => (
            <div key={doctor._id || doctor.name} className="card shadow-sm w-96 mx-auto">
              <figure>
                <img src={doctor.image} alt={doctor.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{doctor.name}</h2>
                <p>{doctor.specialty}</p>
                <div className="rating rating-xs">
                  <input type="radio" name={`rating-${doctor._id}`} className="mask mask-star bg-orange-400" />
                  <input type="radio" name={`rating-${doctor._id}`} className="mask mask-star bg-orange-400" />
                  <input type="radio" name={`rating-${doctor._id}`} className="mask mask-star bg-orange-400" />
                  <input type="radio" name={`rating-${doctor._id}`} className="mask mask-star bg-orange-400" />
                  <input type="radio" name={`rating-${doctor._id}`} className="mask mask-star bg-orange-400" defaultChecked />
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
                  <Link to="/doctorprofile" className="w-full">
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

      {visibleCount < doctors.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="btn btn-xl bg-white border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white"
          >
            More Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default Experts;
