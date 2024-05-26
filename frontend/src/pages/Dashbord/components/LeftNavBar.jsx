import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
import logo from '../../../assets/logos/Surasa Logo.png'
import Component from '../components/DashboardHome/DailyMenuItems';

function LeftNavBar({ openSidebarToggle, OpenSidebar, setCurrentScreen, setOpenSidebarToggle }) {
  
  return (
    <aside className={`h-full bg-gray-800 overflow-y-auto transition-all duration-500 ${openSidebarToggle ? 'absolute z-20 w-64' : 'hidden md:block md:w-64'}`}>
      <div className='flex justify-between items-center p-4 '>
        <div className='flex items-center  text-white'>
          <img className='h-20 w-20 rounded-lg' src={logo}/>
        </div>
        <span className='text-red-500 text-lg cursor-pointer md:hidden' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='list-none p-0'>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('Home'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsGrid1X2Fill className='text-xl mr-3' /> Home
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('Customer Info'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsFillArchiveFill className='text-xl mr-3' /> Customer Info
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('BookingRequests'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsFillGrid3X3GapFill className='text-xl mr-3' /> Booking Requests
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('Orders'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsPeopleFill className='text-xl mr-3' /> Orders
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('MenuItems'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsListCheck className='text-xl mr-3' /> MenuItems
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('ContactMsgs'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsMenuButtonWideFill className='text-xl mr-3' /> Messages
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('ReviewApproval'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsMenuButtonWideFill className='text-xl mr-3' /> Review Approval
          </a>
        </li>
        <li className='p-4 hover:bg-gray-700 cursor-pointer' onClick={() => { setCurrentScreen('SignOut'); setOpenSidebarToggle(false); }}>
          <a href="#" className='flex items-center text-white'>
            <BsFillGearFill className='text-xl mr-3' /> Sign Out
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default LeftNavBar;
