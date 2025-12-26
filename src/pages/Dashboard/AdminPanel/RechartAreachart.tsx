import React, { useEffect, useMemo, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface User {
  _id: string;
  createdAt: string;
}

const RechartAreachart: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then((data: User[]) => setUsers(data))
      .catch(console.error);
  }, []);

  // Create chart data with all days (1–31)
  const chartData = useMemo(() => {
    const dateMap: Record<number, number> = {};

    // Count users per day
    users.forEach(user => {
      const day = new Date(user.createdAt).getDate(); // 1–31
      dateMap[day] = (dateMap[day] || 0) + 1;
    });

    // Get current month total days
    const now = new Date();
    const totalDays = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    ).getDate();

    // Build full month data
    const result = [];
    for (let day = 1; day <= totalDays; day++) {
      result.push({
        date: day.toString(), // X-axis
        patients: dateMap[day] || 0, // Y-axis
      });
    }

    return result;
  }, [users]);

  return (
    <div className="bg-white p-3 rounded-xl w-[450px] h-[350px]">
      <h3 className="text-[#898989] font-semibold">Patients (Monthly)</h3>
      <div className="divider"></div>

      <div className="w-[440px] h-52 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="patients"
              stroke="#8884d8"
              fill="#E0E7FF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RechartAreachart;
