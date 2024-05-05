import React from 'react';
import backgroundImg from '../src/assets/images/surasabg.jpg';

const Home = () => {
  return (
    <div  
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" 
      style={{backgroundImage: `url(${backgroundImg})`, zIndex: 1}}>
      <div className="absolute inset-0 bg-white opacity-50 z-0"></div>
      <h1 className="text-4xl font-bold text-center mb-8 relative z-10">
        Welcome to Surasa
      </h1>
      <p className="text-center mb-8 relative z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
        sapien et nisl tincidunt commodo.
      </p>
      <div className="flex space-x-4 relative z-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit Our Restaurant
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          See Our Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
