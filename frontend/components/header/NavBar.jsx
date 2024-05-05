import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../src/assets/logos/Surasa Logo.png';
import { GiHamburgerMenu } from "react-icons/gi";


function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-NavBarBG">
      <nav className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex ">
          <img className="h-[100px] w-[100px]" src={logo} alt="Surasa Logo" />
          
        </div>
        {/* Navigation Links */}
        <ul className="hidden space-x-4 lg:flex ml-24">
          <li>
            <Link
              className="text-black hover:text-[#291603] cursor-pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-black hover:text-[#291603] cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-black hover:text-[#291603] cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="text-black hover:text-[#291603] cursor-pointer"
              activeClass="active"
              to="register"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Register
            </Link>
          </li>
        </ul>
        {/* Register and Login Buttons */}
        <div className="mr-10 hidden lg:flex md:flex sm:flex">
            <button className="
            bg-transparent      hover:bg-[#291603] 
            text-[#F0C903]      hover:text-white
            border-[#F0C903]    hover:border-[#291603]
            border-2 font-semibold py-2 px-6 rounded-3xl mr-2">
              Register
            </button>
            <button className="
            bg-SurasaYellow   hover:bg-[#291603]
            border-[#F0C903]  hover:text-white
            text-white                  hover:border-[#291603]
            border-2 font-semibold py-2 px-6 rounded-3xl mr-2">
              Login
            </button>
            
        </div>
        <div className='lg:hidden md:hidden sm:hidden mx-10'>
              <GiHamburgerMenu 
                size={40}
                onClick={toggleDropdown}/> 
                {showDropdown && (
        <div className="absolute top-16 right-0 bg-white shadow-md mx-4 p-16 px-28">
          {/* Dropdown items */}
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                className="text-gray-800 hover:text-gray-900"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-gray-900"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
            <Link
              className="text-black hover:text-gray-700 cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-black hover:text-gray-700 cursor-pointer"
              activeClass="active"
              to="register"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Register
            </Link>
          </li>
          </ul>
        </div> )}
        </div>

      </nav>
    </div>
  );
}

export default NavBar;
