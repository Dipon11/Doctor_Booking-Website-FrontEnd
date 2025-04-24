import React, { useEffect, useState } from 'react';
import { getStoredBook, removeFromStoreDb } from '../../Utility/adtoodd';
import { useLoaderData, Link } from 'react-router-dom';
import Booked from '../Booked/Booked';
import DoctorChart from '../Chart/DoctorChart';

const Booklist = () => {
  const data = useLoaderData();
  const [bookedList, setBookedList] = useState([]);

  useEffect(() => {
    const storedBookingList = getStoredBook();
    const convStoredBookingList = storedBookingList.map(booked => parseInt(booked));
    const bookingList = data.filter(item => convStoredBookingList.includes(item.id));
    setBookedList(bookingList);
  }, [data]);

  const handleCancel = (id) => {
    removeFromStoreDb(id);
    const updatedList = bookedList.filter(doctor => doctor.id !== parseInt(id));
    setBookedList(updatedList);
    alert('Appointment deleted!');
  };

  return (
    <div>
      <DoctorChart></DoctorChart>
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl font-bold text-white mb-4">My Today Appointments</h1>
        <p className="text-base text-gray-400 max-w-2xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      {bookedList.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-300 font-bold text-5xl bg-gray-500  py-20 rounded-4xl">
            No appointments booked.
          </p>
          <Link to="/">
            <button className="btn bg-blue-500 text-white mt-8 hover:bg-blue-600 rounded-4xl mb-20">
              Return to Home
            </button>
          </Link>
        </div>
      ) : (
        bookedList.map(booked => (
          <Booked
            key={booked.id}
            booked={booked}
            onCancel={handleCancel}
          />
        ))
      )}
    </div>
  );
};

export default Booklist;
