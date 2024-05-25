// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../../../components/header/NavBar.jsx';
import Footer from '../../../components/footer/Footer.jsx';
import ImageGrid from './Components/ImageGrid/ImageGrid.jsx';
import AboutUs from './AboutUs.jsx';
import Booking from './Booking.jsx';
import ContactUs from './ContactUs.jsx';
import Register from '../Register/Register.jsx';
import Tabs from './Components/menu/Tabs.jsx';

function Layout() {
  return (
    <>
      <NavBar />
      <ImageGrid />
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
           <Tabs/>
        </div>   
      <AboutUs />
      <Booking />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Layout;
