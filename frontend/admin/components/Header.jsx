import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header flex-row-reverse'>
        <div className='menu-icon flex'>
            <BsJustify className='icon flex' onClick={OpenSidebar}/>
        </div>
        {/* <div className='header-left'>
            <BsSearch  className='icon'/>
        </div> */}
        {/* <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div> */}
    </header>
  )
}

export default Header