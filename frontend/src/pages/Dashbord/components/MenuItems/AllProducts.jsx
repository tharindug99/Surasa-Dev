import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  
  // Fetch all products
  useEffect(() => {
    axios.get('http://localhost:8000/api/list')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Handle editing a product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setType(product.type);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
    setType('');
    setName('');
    setDescription('');
    setPrice('');
    setFile(null);
  };

  
  // Update product
const updateProduct = (id) => {
  const formData = new FormData();
  formData.append('file', file);
  console.log("hii")
  const data = {
    type,
    name,
    description,
    price,
    // img_path: file? `products/${formData.get('file').name}` : currentProduct.img_path,
  };
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  updateProductRequest(id, data);
};

// Make the patch request
const updateProductRequest = (id, data,formData) => {
  axios.patch(`http://localhost:8000/api/edit/${id}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
 .then(response => {
    console.log('Product updated successfully:', response.data);
  })
 .catch(error => {
    console.error('Error updating product:', error);
  });

  if (file) {
    axios.patch(`http://localhost:8000/api/edit/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Image updated successfully:', response.data);
   })
    .catch(error => {
      console.error('Error updating Image:', error);
    });
  }






  setIsModalOpen(false);
};

  // Delete product
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then(response => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {products.map(product => (
          <div key={product.id} className="max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex-grow flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden m-2">
            <div className="flex justify-center items-center p-4">
              <img className="h-32 w-32 object-cover rounded-lg" src={`${product.img_path}`} alt={product.name} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-black text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex-1">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">LKR {product.price}</span>
              <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">⭐ {product.ratings || 0}</span>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white lg:max-h-[650px] p-10 rounded-md shadow-lg w-full max-w-lg max-h-md">
            <h2 className="text-2xl font-semibold mb-4 text-black">Edit Menu Item</h2>
            <form>
              <div className="mb-4 flex flex-row">
                <div className='w-1/3'>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Item Type
                  </label>
                  <select
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
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
                    onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setPrice(e.target.value)}
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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => updateProduct(currentProduct.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Update Item
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
    </div>
  );
}

export default AllProducts;