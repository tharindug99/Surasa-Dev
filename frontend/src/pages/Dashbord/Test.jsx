import React, { useState } from 'react'
import DashBoardHeader from './components/DashBoardHeader'
import LeftNavBar from './components/LeftNavBar'

function Test() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [currentScreen, setCurrentScreen] = useState('Home')

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="container mx-auto">
      <DashBoardHeader OpenSidebar={OpenSidebar} />
      <div className="flex h-screen">
        <LeftNavBar 
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
          setCurrentScreen={setCurrentScreen}
        />
        <div className="flex-1 bg-slate-900 text-white p-4">Content</div>
      </div>
    </div>
  )
}

export default Test
