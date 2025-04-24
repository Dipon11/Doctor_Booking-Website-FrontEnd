import React from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from 'react-router';
const Card = ({card}) => {
console.log(card)
 
const {id,image ,name,education,experience, workingAt,registrationNumber} =card;

return (
  <div>
    <div className="card bg-white rounded-4xl shadow-sm text-black">
 
 
  <figure className='p-10'>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body -mt-10">
<div clas>
<div className="badge badge-outline badge-primary mr-5 ">Available</div>
<div class="badge bg-blue-500 border-none ">{experience}</div>
</div>
    <h2 className="card-title">
     {name}

    </h2>
    <p>{education} {workingAt}</p>
    <div className='border-t-1 border-dashed'></div>
    <p className='flex items-center'><IoPersonCircleSharp className="text-3xl mr-1" />Reg No: {registrationNumber}</p>
  
  <Link to={`/details/${id}`}>
  <button className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-4xl font-medium">View Details</button>
  </Link>
   
  </div>
</div>
  </div>
  );
};

export default Card;