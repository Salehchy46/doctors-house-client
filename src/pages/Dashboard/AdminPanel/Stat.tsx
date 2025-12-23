import { Stat, StatGroup, Progress } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import frame1 from '../../../assets/dashboard/Frame1.png';
import frame2 from '../../../assets/dashboard/Frame2.png';
import frame3 from '../../../assets/dashboard/Frame3.png';
import { useEffect, useState } from 'react';

interface Appointment {
  _id: string;
  // add more fields if needed
}

const StatSect: React.FC = () => {

  const [doctors, setDoctors] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/appointments')
      .then(res => res.json())
      .then((data: Appointment[]) => setDoctors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto">
      <StatGroup spacing={20} columns={3}>

        <Stat bordered className="rounded-xl">
          <div className="flex items-center gap-5">
            <div className="bg-red-100 w-20 h-20 rounded-xl">
              <img src={frame1} className="w-10 h-10 mx-auto my-5" alt="Doctor" />
            </div>
            <Stat.Value>{doctors.length}</Stat.Value>
          </div>
          <Progress.Line percent={doctors.length} strokeColor="#FF0034" showInfo={false} />
          <p className="font-semibold">Doctor</p>
        </Stat>

        <Stat bordered className="rounded-xl">
          <div className="flex items-center gap-5">
            <div className="bg-green-100 w-20 h-20 rounded-xl">
              <img src={frame2} className="w-10 h-10 mx-auto my-5" alt="Patients" />
            </div>
            <Stat.Value>487</Stat.Value>
          </div>
          <Progress.Line percent={50} strokeColor="#7BB13C" showInfo={false} />
          <p className="font-semibold">Patients</p>
        </Stat>

        <Stat bordered className="rounded-xl">
          <div className="flex items-center gap-5">
            <div className="bg-amber-100 w-20 h-20 rounded-xl">
              <img src={frame3} className="w-10 h-10 mx-auto my-5" alt="Appointments" />
            </div>
            <Stat.Value>98</Stat.Value>
          </div>
          <Progress.Line percent={50} strokeColor="#FFBC34" showInfo={false} />
          <p className="font-semibold">Appointment</p>
        </Stat>

      </StatGroup>
    </div>
  );
};

export default StatSect;
