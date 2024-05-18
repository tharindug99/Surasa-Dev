import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'

function DashBoardHeader({ OpenSidebar }) {
  return (
    <header className='flex items-center justify-between h-12 px-4 shadow-md w-full '>
      <div className='flex md:hidden'>
        <BsJustify className='text-xl cursor-pointer' onClick={OpenSidebar} />
      </div>
      <div className='hidden md:flex md:items-center md:justify-between md:w-full'>
        
        <div className='flex text-right'>
          <span className='text-lg font-medium text-right'>Welcome back, User</span>
        </div>
      </div>
    </header>
  )
}

export default DashBoardHeader
