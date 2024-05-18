// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from '../../../admin/components/Header.jsx'
import SideBar from '../../../admin/components/SideBar.jsx'
import Home from '../../../admin/pages/Home.jsx'
import Products from '../../../admin/pages/Products.jsx'
import BookingRequests from '../../../admin/pages/BookingRequests.jsx'
import Customers from '../../../admin/pages/Customers.jsx'
import '../styles.css'

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [currentScreen, setCurrentScreen] = useState('Home')

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <Home />
      case 'Products':
        return <Products />
      case 'BookingRequests':
        return <BookingRequests />
      case 'Customers':
        return <Customers />
      default:
        return <Home />
    }
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} setCurrentScreen={setCurrentScreen}/>
      <div className='main-content'>
        {renderScreen()}
      </div>
    </div>
  )
}

export default Dashboard
