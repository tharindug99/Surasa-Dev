import React from 'react'
import NavBar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Booking from '../pages/Booking'
import ContactUs from '../pages/ContactUs'
import Register from '../pages/Register'

function Layout() {
  return (
    <>
    <NavBar/>
    <Home />
      <AboutUs />
      <Booking/>
      <ContactUs />
      <Register />
    <Footer/>
    </>
  )
    
}

export default Layout