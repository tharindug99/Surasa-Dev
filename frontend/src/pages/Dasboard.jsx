import React from 'react'
import Header from '../../admin/components/Header'
import SideBar from '../../admin/components/SideBar'
import Home from '../../admin/pages/Home'

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-yellow-100">
      <Header className="flex-none" />
      <div className="flex flex-1">
        <SideBar className="flex-1 w-40" />
        <Home className="flex-4" />
      </div>
    </div>
  )
}

export default Dashboard
