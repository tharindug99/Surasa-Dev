import React from 'react';
import backgroundImg from '../src/assets/images/surasabg.jpg';

const ContactUs = () => {
  return (
    <div  
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" 
      style={{backgroundImage: `url(${backgroundImg})`, zIndex: 1}}>
      <div className="absolute inset-0 bg-white opacity-40 z-0"></div>
      <h1 className="text-4xl font-bold text-center mb-8 relative z-10">
        Contact Us
      </h1>
      <p className="text-center mb-8 relative z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
        sapien et nisl tincidunt commodo.
      </p>
      <div className="flex flex-col items-center relative z-10">
        <input
          type="email"
          className="bg-gray-200 rounded-md px-4 py-2 mb-4 w-64"
          placeholder="Your Email"
        />
        <textarea
          className="bg-gray-200 rounded-md px-4 py-2 mb-4 w-64 h-32"
          placeholder="Your Message"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
