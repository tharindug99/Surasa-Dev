import { useState } from 'react'
import './App.css'
import NavBar from '../components/header/NavBar'
import Footer from '../components/footer/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Register from './pages/Register'
import Booking from './pages/Booking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <Booking/>
      <ContactUs />
      <Register />
      <Footer />
    </>
  )
}

export default App
