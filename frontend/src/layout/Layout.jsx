import React from 'react';
import NavBar from '../../components/header/NavBar';
import Footer from '../../components/footer/Footer';
import ImageGrid from '../../components/imageGrid/ImageGrid.jsx';
import AboutUs from '../pages/AboutUs';
import Booking from '../pages/Booking';
import ContactUs from '../pages/ContactUs';
import Register from '../pages/Register';
import Tabs from '../../components/menu/Tabs';

function Layout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <NavBar />
      <ImageGrid />
      <Tabs />
      <AboutUs />
      <Booking />
      <ContactUs />
      <Register />
      <Footer />
    </div>
  );
}

export default Layout;
