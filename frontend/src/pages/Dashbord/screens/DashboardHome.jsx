import React, { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import Component from '../components/DashboardHome/DailyMenuItems';


function DashboardHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="bg-teal-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Total Users Registered</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
        <div className="bg-violet-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Booking Requests</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
        <div className="bg-red-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Orders</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
        <div className="bg-lime-600 p-4 rounded-md text-white flex flex-col justify-between">
          <div>Total Users Registered</div>
          <div className="text-4xl lg:text-right md:text-right text-center pt-10">100</div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className="text-white font-semibold text-[48px]">
          Today's Menu Items
        </div>
        <div className="text-white text-right font-semibold text-[48px]">
          <FiPlusCircle onClick={handleOpenModal} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-md shadow-lg w-full max-w-lg max-h-md">
            <h2 className="text-2xl font-semibold mb-4 text-black">Add Menu Item</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Item Type
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="food">Food</option>
                  <option value="beverage">Beverage</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price
                </label>
                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <img src={selectedImage} alt="Selected" className="mt-4 rounded-md" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Item
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Component />

    </div>
  );
}

export default DashboardHome;
