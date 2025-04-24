import React, { Suspense } from 'react';
import Card from '../Card/Card';
import { IoPersonCircleSharp } from "react-icons/io5";
const DoctorCards = ({data}) => {
  return (
    <div>
  <div className='flex justify-center text-center mt-10' >
         <h1 className='text-4xl font-bold w-[80%]'>Our Best Doctors</h1>
      </div>
      <p className='text-center mt-5 mb-5'>
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
       </p>

     <Suspense fallback = {<span>Loading......</span>}>
<div className='bg-gray-600 rounded-4xl p-10 ml-10 grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-10 mb-10 '>
{     
 data.map((card)=> <Card key={card.id}card={card}></Card>)
 }  
</div>
     </Suspense>
    </div>
  );
};

export default DoctorCards;