import React, { useState } from 'react'
import Header from '../../admin/components/Header'
import SideBar from '../../admin/components/SideBar'
import Home from '../../admin/pages/Home'
import Products from '../../admin/pages/Products'
import BookingRequests from '../../admin/pages/BookingRequests'
import Customers from '../../admin/pages/Customers'
import './styles.css'

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
