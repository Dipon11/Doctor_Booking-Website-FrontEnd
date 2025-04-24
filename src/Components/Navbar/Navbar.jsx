import React from 'react';
import image from '../../assets/logo.png'
import { Link } from 'react-router';
const Navbar = () => {
  
  const links =<>
  <Link to='/'>  <li className='m-2'>Home</li></Link>
<Link to ='/bookedList'>  <li className='m-2'>My-Bookings</li></Link>

  <Link to='/blogs'> <li className='m-2'>Blogs</li></Link>
 
  <li className='m-2'>Contact US</li></>
  
  
  return (
  <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='ml-5'><a>{links}</a></li>
  
      </ul>
    </div>
    <div className='flex justify-center '>
    <img className='w-9 h-9' src={image} alt="" />
    <a className="btn btn-ghost  text-2xl font-bold">Phudu</a>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>{links}</a></li>
  
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn bg-blue-700 rounded-4xl p-6 textarea-md">Emergency</button>
  </div>
</div>
  );
};

export default Navbar;