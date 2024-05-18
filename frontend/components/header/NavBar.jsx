import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import logo from '../../src/assets/logos/Surasa Logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import './NavBar.css';

function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`bg-NavBarBG ${isScrolled ? 'fixed top-0 left-0 w-full z-50 bg-white' : 'top-0 left-0 w-full'}`}>
            <nav className="flex justify-between items-center w-full h-20 px-4 md:px-8">
                {/* Logo */}
                <div className="flex">
                    <img className="h-[5rem] w-[5rem]" src={logo} alt="Surasa Logo"/>
                </div>
                {/* Navigation Links */}
                <ul className="hidden lg:flex ml-24 space-x-4">
                    <li>
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to="slider"
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
                            className="nav-link"
                            activeClass="active"
                            to="aboutus"
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
                            className="nav-link"
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
                </ul>
                {/* Register and Login Buttons */}
                <div className="flex">
                    <button className="register-button">Register</button>
                    <button className="login-button">Login</button>
                </div>
                {/* Hamburger Menu for Small Screens */}
                <div className="lg:hidden">
                    <GiHamburgerMenu
                        size={40}
                        onClick={toggleDropdown}
                    />
                    {/* Dropdown menu for small screens */}
                    {showDropdown && (
                        <div className="absolute top-16 right-0 bg-white shadow-md p-6 w-full">
                            <ul className="flex flex-col space-y-2 items-center">
                                {/* Dropdown items with hover effect */}
                                <li>
                                    <Link
                                        className="dropdown-link"
                                        activeClass="active"
                                        to="slider"
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
                                        className="dropdown-link"
                                        activeClass="active"
                                        to="aboutus"
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
                                        className="dropdown-link"
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
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
