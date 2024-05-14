import React, { useState } from 'react';
import Food from './Food';
import Beverages from './Beverages';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Food');

  return (
    <div className="container px-20">
      <div data-aos="fade-up" data-aos-offset="200" className="container lg:py-5 sm:py-10">
        <div className="lg:w-[740px] mx-auto ">
          <h2 className="heading text-center font-medium text-[50px]">Today's Menu</h2>
        </div>
      </div>
      <div className="flex mb-4">
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === 'Food'
              ? 'bg-yellow-400 rounded-md font-semibold text-brown-600'
              : 'text-gray-500 hover:text-yellow-400'
          }`}
          onClick={() => setActiveTab('Food')}
        >
          Food
        </button>
        <button
          className={`py-2 px-4 focus:outline-none ${
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
      </div>
    </div>
  );
}

export default Tabs;
