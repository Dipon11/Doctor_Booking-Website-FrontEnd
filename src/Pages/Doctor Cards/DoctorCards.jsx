import React, { Suspense, useState } from 'react';
import Card from '../Card/Card';
import { IoPersonCircleSharp } from "react-icons/io5";

const DoctorCards = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount(data.length); 
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  const visibleData = data.slice(0, visibleCount);

  return (
    <div>
      <div className='flex justify-center text-center mt-10'>
        <h1 className='text-4xl font-bold w-[80%]'>Our Best Doctors</h1>
      </div>
      <p className='text-center mt-5 mb-5'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      <Suspense fallback={<span>Loading......</span>}>
        <div className='bg-gray-600 rounded-4xl p-10 ml-10 grid lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-10 mb-10 '>
          {visibleData.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </Suspense>

      <div className="text-center mb-10">
        {visibleCount < data.length ? (
          <button onClick={handleShowMore} className="btn btn-primary">
            Show More
          </button>
        ) : (
          data.length > 6 && (
            <button onClick={handleShowLess} className="btn btn-secondary">
              Show Less
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DoctorCards;
