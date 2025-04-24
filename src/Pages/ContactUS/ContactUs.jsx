import React from 'react';

const ContactUs = () => {
  return (
<div>
  <Navbar></Navbar>
<div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  
  <div className="text-center">
    <h1 className="text-7xl font-extrabold text-blue-700 mb-4">404</h1>
    <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6">
      Sorry, the page you are looking for doesn't exist or has been moved.
    </p>
    <Link to="/">
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300">
        Go Back Home
      </button>
    </Link>
  </div>
</div>

<Footer></Footer>
</div>
  );
};

export default ContactUs;
