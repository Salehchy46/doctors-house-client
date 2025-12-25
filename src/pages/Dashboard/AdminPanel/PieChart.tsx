/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface Doctor {
  _id: string;
}

interface User {
  _id: string;
}

interface Appointment {
  _id: string;
}

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Piechart() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/doctors')
      .then(res => res.json())
      .then((data: Doctor[]) => setDoctors(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then((data: User[]) => setUsers(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/appointments')
      .then(res => res.json())
      .then((data: Appointment[]) => setAppointments(data))
      .catch(console.error);
  }, []);

  // Dynamic Pie Chart Data
  const pieData = useMemo(
    () => [
      { name: 'Doctors', value: doctors.length },
      { name: 'Users', value: users.length },
      { name: 'Appointments', value: appointments.length },
    ],
    [doctors, users, appointments]
  );

  return (
    <div className="bg-white p-3 rounded-xl w-[450px] h-[350px]">
      <h3 className="text-[#898989] font-semibold">System Overview</h3>
      <div className="divider"></div>

      <div className="w-44 h-44 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
