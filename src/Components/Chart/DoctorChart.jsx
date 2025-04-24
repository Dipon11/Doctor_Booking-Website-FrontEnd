import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { getStoredBook, removeFromStoreDb } from "../../Utility/adtoodd";

const DoctorChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get("/data.json") // Replace with your API if needed
      .then((response) => {
        const allDoctors = response.data;
        const stored = getStoredBook().map(id => parseInt(id));
        const filtered = allDoctors.filter(doc => stored.includes(doc.id));
        setChartData(filtered);
      });
  }, []);

  const handleBarClick = (data) => {
    const confirm = window.confirm(`Are you sure you want to delete Dr. ${data.name}?`);
    if (confirm) {
      removeFromStoreDb(data.id);
      const updated = chartData.filter(doc => doc.id !== data.id);
      setChartData(updated);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white p-6 rounded-xl shadow-lg">
   

      {chartData.length === 0 ? (
        <p className="text-center text-gray-600">No data available for chart.</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            onClick={(e) => e && handleBarClick(e.activePayload?.[0]?.payload)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="consultationFee" fill="#38BDF8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default DoctorChart;
