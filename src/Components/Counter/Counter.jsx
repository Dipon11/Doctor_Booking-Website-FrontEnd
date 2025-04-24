import React from "react";
import CountUp from "react-countup";
import { FaUserMd, FaCalendarCheck, FaUsers, FaHospitalAlt } from "react-icons/fa";

const Counter = () => {
  const stats = [
    {
      icon: <FaUserMd className="text-4xl text-blue-600" />,
      label: "Doctors",
      value: 128,
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-green-600" />,
      label: "Appointments",
      value: 320,
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" />,
      label: "Patients",
      value: 1250,
    },
    {
      icon: <FaHospitalAlt className="text-4xl text-red-600" />,
      label: "Hospitals",
      value: 18,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={stat.value} duration={5} />
            </h3>
            <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
