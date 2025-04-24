import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { IoPersonCircleSharp } from "react-icons/io5";
import { addToStoreDb } from '../../Utility/adtoodd';

const Details = () => {
  const {id} =useParams();
const dataInt =parseInt(id)
 const data = useLoaderData();
 const navigate = useNavigate();
 const singleData = data.find(doctor=> doctor.id === dataInt )

const hanndlebooked = id =>{
   //store with id
   //where to store
   addToStoreDb(id)
   navigate('/bookedList');
   
}
  return (
    <div className=''>
   <div className="card card-side shadow-sm p-10 mb-10 rounded-4xl bg-white">
  <figure>
    <img
      src={singleData.image}
      alt="Movie" />
  </figure>
  <div className="card-body lg:w-2/3 text-gray-600">
          <h2 className="card-title text-2xl font-bold text-black">{singleData.name}</h2>
          <p className="text-lg">
            <strong>Education:</strong> {singleData.education}
          </p>
          <p className="text-lg">
            <strong>Speciality:</strong> {singleData.speciality}
          </p>
          <p className="text-lg">
            <strong>Experience:</strong> {singleData.experience}
          </p>
          <p className="text-lg text-gray-600'">
            Working At: <br />
               <span className='text-black font-bold'>{singleData.workingAt} </span>
          </p>
          <div className='border-t-1 border-dashed'></div>
  <p className='flex items-center'>
    <IoPersonCircleSharp className="text-3xl mr-1" />Reg No: {singleData.registrationNumber}
    </p>      
           
    <div className='border-b-1 border-dashed'></div>
          <div className="text-lg">
  <strong>Availability:</strong>
  <div className="flex flex-wrap gap-2 mt-2">
    {singleData.availability.map((day, index) => (
      <span key={index} className="badge badge-outline badge-success">
        {day}
      </span>
    ))}
  </div>
</div>
<p className="text-lg">
            <strong>Consultation Fee:</strong><span className='font-medium text-blue-600'>₹{singleData.consultationFee} </span> 
            (ncl Vat) <span className='text-blue-600'>Per Consulataion</span>
          </p>

          <div className="card-actions justify-end mt-4">
            <button onClick={()=>hanndlebooked(id)} className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
</div>
    </div>
  );
};

export default Details;