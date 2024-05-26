import React from 'react';
import NavBar from '../../components/header/NavBar';
import Footer from '../../components/footer/Footer';
import ImageGrid from '../../components/imageGrid/ImageGrid.jsx';
import AboutUs from '../pages/AboutUs';
import Booking from '../pages/Booking';
import ContactUs from '../pages/ContactUs';
import Tabs from '../../components/menu/Tabs';

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
