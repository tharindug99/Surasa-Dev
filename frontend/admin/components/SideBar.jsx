import React from 'react'
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs'

function SideBar({ openSidebarToggle, OpenSidebar, setCurrentScreen }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand flex'>
                <BsCart3 className='icon_header' /> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('Home')}>
                <a href="#">
                    <BsGrid1X2Fill className='icon' /> Home
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('Products')}>
                <a href="#">
                    <BsFillArchiveFill className='icon' /> Products
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('BookingRequests')}>
                <a href="#">
                    <BsFillGrid3X3GapFill className='icon' /> Booking Requests
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('Customers')}>
                <a href="#">
                    <BsPeopleFill className='icon' /> Customers
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('Inventory')}>
                <a href="#">
                    <BsListCheck className='icon' /> Inventory
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('Reports')}>
                <a href="#">
                    <BsMenuButtonWideFill className='icon' /> Reports
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => setCurrentScreen('SignOut')}>
                <a href="#">
                    <BsFillGearFill className='icon' /> Sign Out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar
