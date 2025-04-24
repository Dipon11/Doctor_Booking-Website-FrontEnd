import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { IoPersonCircleSharp } from "react-icons/io5";
import { addToStoreDb } from '../../Utility/adtoodd';

const Details = () => {
  const { id } = useParams();
  const dataInt = parseInt(id);
  const data = useLoaderData();
  const navigate = useNavigate();

  const singleData = data.find(doctor => doctor.id === dataInt);

  const hanndlebooked = id => {
    addToStoreDb(parseInt(id));
    navigate('/bookedList'); // Make sure this route is defined
  };

  return (
    <div className=''>
      <div className="card card-side shadow-sm p-10 mb-10 rounded-4xl bg-white">
        <figure>
          <img src={singleData.image} alt="Doctor" />
        </figure>
        <div className="card-body lg:w-2/3 text-gray-600">
          <h2 className="card-title text-2xl font-bold text-black">{singleData.name}</h2>
          <p className="text-lg"><strong>Education:</strong> {singleData.education}</p>
          <p className="text-lg"><strong>Speciality:</strong> {singleData.speciality}</p>
          <p className="text-lg"><strong>Experience:</strong> {singleData.experience}</p>
          <p className="text-lg"><strong>Working At:</strong> <span className='text-black font-bold'>{singleData.workingAt}</span></p>
          <p className="text-lg"><strong>Consultation Fee:</strong> ₹{singleData.consultationFee}</p>

          <div className="card-actions justify-end mt-4">
            <button onClick={() => hanndlebooked(id)} className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
