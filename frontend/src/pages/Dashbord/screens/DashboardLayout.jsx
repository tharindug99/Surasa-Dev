import React, { useState } from 'react';
import DashBoardHeader from '../components/DashBoardHeader';
import LeftNavBar from '../components/LeftNavBar';
import DashboardHome from './DashboardHome';
import CustomerInfo from './CustomerInfo';
import BookingRequests from './BookingRequests';
import DeliveryOrders from './DeliveryOrders';
import MenuItems from './MenuItems';
import ContactMsgs from './ContactMsgs';
import ReviewApproval from './ReviewApproval';
// import SignOutScreen from '../screens/SignOutScreen';

function DashboardLayout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Home');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <DashboardHome />;
      case 'Customer Info':
        return <CustomerInfo />;
      case 'BookingRequests':
        return <BookingRequests />;
      case 'Orders':
        return <DeliveryOrders/>;
      case 'MenuItems':
        return <MenuItems />;
      case 'ContactMsgs':
        return <ContactMsgs />;
      case 'ReviewApproval':
        return <ReviewApproval />;
      case 'SignOut':
        return <SignOutScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="container mx-auto">
      <DashBoardHeader OpenSidebar={OpenSidebar} />
      <div className="flex h-screen">
        <LeftNavBar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
          setCurrentScreen={setCurrentScreen}
        />
        <div className="flex-1 bg-slate-900 text-white p-4 overflow-auto">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
