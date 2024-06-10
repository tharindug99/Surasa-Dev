import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/list')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [100]);

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit product with id: ${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then(response => {
        // console.log('Deleted product details:', response.data); 
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
              <img className="h-32 w-32 object-cover rounded-lg" src={`http://localhost:8000/${product.img_path}`} alt={product.name} />
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
                onClick={() => handleEdit(product.id)}
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
    </div>
  );
}

export default AllProducts;
