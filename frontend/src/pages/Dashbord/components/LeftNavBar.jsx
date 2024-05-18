import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';

function LeftNavBar({ openSidebarToggle, OpenSidebar, setCurrentScreen }) {
  return (
    <aside className={`h-full bg-gray-800 overflow-y-auto transition-all duration-500 ${openSidebarToggle ? 'absolute z-20 w-64' : 'hidden md:block md:w-64'}`}>
      <div className='flex justify-between items-center p-4 mb-8'>
        <div className='flex items-center text-white'>
          <BsCart3 className='text-2xl mr-2' /> 
          <span className='font-bold text-lg'>SHOP</span>
        </div>
        <span className='text-red-500 text-lg cursor-pointer md:hidden' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='list-none p-0'>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('Home')}>
          <a href="#" className='flex items-center text-white'>
            <BsGrid1X2Fill className='text-xl mr-3' /> Home
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('Customer Info')}>
          <a href="#" className='flex items-center text-white'>
            <BsFillArchiveFill className='text-xl mr-3' /> Customer Info
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('BookingRequests')}>
          <a href="#" className='flex items-center text-white'>
            <BsFillGrid3X3GapFill className='text-xl mr-3' /> Booking Requests
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('Orders')}>
          <a href="#" className='flex items-center text-white'>
            <BsPeopleFill className='text-xl mr-3' /> Orders
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('Inventory')}>
          <a href="#" className='flex items-center text-white'>
            <BsListCheck className='text-xl mr-3' /> Inventory
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('Reports')}>
          <a href="#" className='flex items-center text-white'>
            <BsMenuButtonWideFill className='text-xl mr-3' /> Reports
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => setCurrentScreen('SignOut')}>
          <a href="#" className='flex items-center text-white'>
            <BsFillGearFill className='text-xl mr-3' /> Sign Out
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default LeftNavBar;
