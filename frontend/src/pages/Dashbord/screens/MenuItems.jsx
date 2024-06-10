import React, { useState } from 'react';
import axios from 'axios';
import { FiPlusCircle } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from '../components/MenuItems/AllProducts';

function MenuItems() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [type, setType] = useState('food');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function addProduct() {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('file', file);
    console.log(formData);
    axios.post('http://localhost:8000/api/addproduct', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
      toast.success('Product added successfully!');
      setName('');
      setFile('');
      setType('food');
      setPrice('');
      setDescription('');
    })
    .catch(error => {
      console.error('Error adding product:', error);
      toast.error('Failed to add product.');
    });
  }
  

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mt-10">
        <div className="text-white font-semibold text-[48px]">
          All Food and Beverage Items
        </div>
        <div className="text-white text-right font-semibold text-[48px]">
          <FiPlusCircle onClick={handleOpenModal} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white lg:max-h-[650px] p-10 rounded-md shadow-lg w-full max-w-lg max-h-md">
            <h2 className="text-2xl font-semibold mb-4 text-black">Add Menu Item</h2>
            <form>
              <div className="mb-4 flex flex-row">
                <div className='w-1/3'>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Item Type
                  </label>
                  <select
                    name="type"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Type</option>
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
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
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
                  onChange={(e)=>setFile(e.target.files[0])}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={addProduct}
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
      <AllProducts/>
      <ToastContainer />
    </div>
  );
}

export default MenuItems;
