import React from 'react';
import Banner from '../Banner/Banner';
import DoctorCards from '../../Pages/Doctor Cards/DoctorCards';
import { useLoaderData } from 'react-router';
import Counter from '../Counter/Counter';

const Home = () => {
 
 const data =useLoaderData();
//  console.log(data)
  return (
    <div>
     <Banner></Banner>
     <DoctorCards data={data}></DoctorCards>
     <Counter></Counter>
    </div>
  );
};

export default Home;