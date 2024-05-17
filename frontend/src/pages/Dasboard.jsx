import React from 'react'
import { useState } from 'react'
import Header from '../../admin/components/Header'
import SideBar from '../../admin/components/SideBar'
import Home from '../../admin/pages/Home'
import './styles.css'

const Dasboard = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home />
  </div>
  )
}

export default Dasboard