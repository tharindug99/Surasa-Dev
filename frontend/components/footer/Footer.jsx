import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-SurasaBrown py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Second Column */}
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F0C903] transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F0C903] transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F0C903] transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F0C903] transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          {/* Third Column */}
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">123 Main Street, City, State, 12345</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
