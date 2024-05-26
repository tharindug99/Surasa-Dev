import React, { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import DailyMenuItemsTable from '../components/DashboardHome/DailyMenuItems';
import MainStatistics from '../components/DashboardHome/MainStatistics';

function DashboardHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddproduct = () => {
    setIsModalOpen(false);
  }

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <MainStatistics/>

      <div className="flex justify-between items-center mt-10">
        <div className="text-white font-semibold text-[48px]">
          Product Items
        </div>
        <div className="text-white text-right font-semibold text-[48px]">
          <FiPlusCircle onClick={handleOpenModal} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white lg:max-h-[650px] p-10 rounded-md shadow-lg w-full max-w-lg max-h-md">
            <h2 className="text-2xl font-semibold mb-4 text-black">Add Menu Item</h2>
            <form>
              <div className="mb-4 flex flex-row">
                <div className=' w-1/3'>
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
                <div className='mx-6 w-2/3'>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
                
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
                  <img src={selectedImage} alt="Selected" className="mt-4 rounded-md h-4 w-4" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleAddproduct}
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

      <div className="my-5 rounded-lg">
          {/* <DailyMenuItemsTable /> */}

      </div>
      

    </div>
  );
}

export default DashboardHome;
