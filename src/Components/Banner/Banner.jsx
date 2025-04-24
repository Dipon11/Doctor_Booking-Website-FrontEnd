import React from 'react';
import image from '../../assets/banner-img-1.png'
const Banner = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex justify-center text-center mt-10' >
         <h1 className='text-5xl font-bold w-[80%]'>Dependable Care, Backed by Trusted Professionals.</h1>
      </div>
      <p className='text-center mt-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
    <div className='flex justify-center mt-10 mb-7 gap-3'>
      <input className='bg-white p-4 w-[80%] ml-20 rounded-4xl text-gray-700' type="text" placeholder='Search any doctor...' />
      <input className='font-medium bg-blue-700 rounded-4xl p-5 px-10 text-xl' type="submit" value="Search Now" />
    </div>
    <div className='flex gap-10 mb-10'>
      <img src={image} alt="" />
      <img src={image} alt="" />
    </div>
    
    </div>
  );
};

export default Banner;