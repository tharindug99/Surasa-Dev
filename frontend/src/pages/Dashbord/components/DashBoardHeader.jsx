import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function DashBoardHeader({ OpenSidebar }) {
  // Function to format the date as "Day, Month Date, Year"
  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    return currentDate;
  };

  return (
    <header className='bg-white flex items-center justify-between h-12 px-4 shadow-md w-full z-100'>
      <div className='flex md:hidden'>
        <BsJustify className='text-xl cursor-pointer' onClick={OpenSidebar} />
      </div>
      <div className='hidden md:flex md:items-center md:justify-between md:w-full'>
        <div className='flex text-right'>
          <span className='text-lg font-medium'>Welcome back, User</span>
        </div>
        <div className='flex text-lg font-medium'>
          <span>{formatDate()}</span>
        </div>
      </div>
    </header>
  );
}

export default DashBoardHeader;
