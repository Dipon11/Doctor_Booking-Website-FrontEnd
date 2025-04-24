import React from 'react';
import { removeFromStoreDb } from '../../Utility/adtoodd'; // adjust path if needed

const Booked = ({ booked, onCancel }) => {
  const {
    id,
    image,
    name,
    education,
    workingAt,
    registrationNumber,
    consultationFee
  } = booked;

  const handleCancel = () => {
    removeFromStoreDb(id);
    console.log('Deleted appointment:', booked); // ✅ Show deleted object in console
    if (onCancel) {
      onCancel(id); 
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-5">
      <div className="card bg-primary text-primary-content shadow-lg">
        <div className="card-body flex flex-col lg:flex-row justify-between items-center">
          {/* Doctor Info Left Side */}
          <div className="flex items-center space-x-4">
            <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover border border-white" />
            <div>
              <h2 className="card-title text-white">{name}</h2>
              <p className="text-sm">{education}</p>
              <p className="text-xs opacity-80">Reg No: {registrationNumber}</p>
              <p className="text-xs opacity-80">Working at: {workingAt}</p>
            </div>
          </div>

         
          <div className="flex flex-col items-end space-y-2 mt-5 lg:mt-0">
            <p className="text-lg font-semibold text-white">Fee: ₹{consultationFee}</p>
            <button
              onClick={handleCancel}
              className="btn bg-red-300 text-black border-none hover:bg-red-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booked;
