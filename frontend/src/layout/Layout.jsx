// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
// import Home from '../pages/Home'
import ImageGrid from '../../components/imageGrid/ImageGrid.jsx';
import AboutUs from '../pages/AboutUs'
import Booking from '../pages/Booking'
import ContactUs from '../pages/ContactUs'
import Register from '../pages/Register'

function Layout() {
  return (
    <>
    <NavBar/>
    {/*<Home />*/}
      <ImageGrid></ImageGrid>
      <AboutUs />
      <Booking/>
      <ContactUs />
      <Register />
    <Footer/>
    </>
  )
    
}

export default Layout