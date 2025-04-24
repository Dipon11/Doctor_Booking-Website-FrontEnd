import React from 'react';
import Banner from '../Banner/Banner';
import DoctorCards from '../../Pages/Doctor Cards/DoctorCards';
import { useLoaderData } from 'react-router';

const Home = () => {
 
 const data =useLoaderData();
//  console.log(data)
  return (
    <div>
     <Banner></Banner>
     <DoctorCards data={data}></DoctorCards>
    </div>
  );
};

export default Home;