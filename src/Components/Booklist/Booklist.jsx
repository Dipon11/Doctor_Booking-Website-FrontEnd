import React, { useEffect, useState } from 'react';
import { getStoredBook } from '../../Utility/adtoodd';
import { useLoaderData } from 'react-router';
import Booked from '../Booked/Booked';

const Booklist = () => {
  const data = useLoaderData();
  const [bookedList, setBookedList] = useState([]);

  useEffect(() => {
    const storedBookingList = getStoredBook();
    const convStoredBookingList = storedBookingList.map(booked => parseInt(booked));
    const bookingList = data.filter(item => convStoredBookingList.includes(item.id));
    setBookedList(bookingList);
  }, [data]);

  // Handle cancel logic here
  const handleCancel = (id) => {
    const updatedList = bookedList.filter(doctor => doctor.id !== id);
    setBookedList(updatedList);
    alert('Appointment deleted!');
  };

  return (
    <div>
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl font-bold text-white mb-4">My Today Appointments</h1>
        <p className="text-base text-gray-400 max-w-2xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      {bookedList.length === 0 ? (
        <p className="text-center text-gray-300 font-bold text-5xl mb-80 bg-gray-500 p-30 rounded-4xl mt-20">No appointments booked.</p>
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
