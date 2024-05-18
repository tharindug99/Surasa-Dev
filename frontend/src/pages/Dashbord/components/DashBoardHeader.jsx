import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'

function DashBoardHeader({ OpenSidebar }) {
  return (
    <header className='flex items-center justify-between h-12 px-4 shadow-md w-full '>
      <div className='flex md:hidden'>
        <BsJustify className='text-xl cursor-pointer' onClick={OpenSidebar} />
      </div>
      <div className='hidden md:flex md:items-center md:justify-between md:w-full'>
        
        <div className='flex items-center'>
          <BsFillBellFill className='text-xl mr-4' />
          <BsFillEnvelopeFill className='text-xl mr-4' />
          <BsPersonCircle className='text-xl mr-4' />
          <span className='text-lg font-medium'>Welcome back, User</span>
        </div>
      </div>
    </header>
  )
}

export default DashBoardHeader
