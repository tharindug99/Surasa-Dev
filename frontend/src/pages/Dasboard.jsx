import React, { useState } from 'react';
import Header from '../../admin/components/Header';
import SideBar from '../../admin/components/SideBar';
import Home from '../../admin/pages/Home';
import Products from '../../admin/pages/Products';
import BookingRequests from '../../admin/pages/BookingRequests';
import Customers from '../../admin/pages/Customers';
import './styles.css';

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [showSidebar, setShowSidebar] = useState(true); // Control whether to show sidebar for smaller screens

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <Home />;
      case 'Products':
        return <Products />;
      case 'BookingRequests':
        return <BookingRequests />;
      case 'Customers':
        return <Customers />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='grid lg:grid-cols-12 md:grid-cols-10 sm:grid-cols-8'>
      {showSidebar && ( // Conditionally render sidebar based on showSidebar state
        <div className='lg:col-span-2 md:col-span-2 sm:col-span-2'>
          <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} setCurrentScreen={setCurrentScreen} />
        </div>
      )}
      <div className='lg:col-span-10 md:col-span-8 sm:col-span-6'>
        <div className='flex flex-col h-screen'>
          <Header OpenSidebar={OpenSidebar} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
          <div className='main-content flex-grow bg-[#1d2634]'>
            {renderScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
