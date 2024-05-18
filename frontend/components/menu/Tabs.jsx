import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Food from './Food';
import Beverages from './Beverages';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Food');
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/order');
  };

  return (
    <div className="container px-20">
      <div data-aos="fade-up" data-aos-offset="200" className="container lg:py-5 sm:py-10">
        <div className="lg:w-[740px] mx-auto ">
          <h2 className="heading text-center font-medium text-[50px]">Today's Menu</h2>
        </div>
      </div>
      <div className="flex mb-4 justify-center">
        <button
          className={`py-2 px-4 mx-2 focus:outline-none ${
            activeTab === 'Food'
              ? 'bg-yellow-400 rounded-md font-semibold text-brown-600'
              : 'text-gray-500 hover:text-yellow-400'
          }`}
          onClick={() => setActiveTab('Food')}
        >
          Food
        </button>
        <button
          className={`py-2 px-4 mx-2 focus:outline-none ${
            activeTab === 'Beverages'
              ? 'bg-yellow-400 rounded-md font-semibold text-brown-600'
              : 'text-gray-500 hover:text-yellow-400'
          }`}
          onClick={() => setActiveTab('Beverages')}
        >
          Beverages
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'Food' && <Food />}
        {activeTab === 'Beverages' && <Beverages />}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleOrderNowClick}
            className="px-6 py-3 mb-20 bg-SurasaBrown text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
          >
            Order Now !!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
