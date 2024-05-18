//Daily Updates


// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Toaster from '../Home/Components/Toaster/Toaster.jsx';

const foodItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
      price: '$8.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumoMickQs_jcLYaMyiQhNG4FsxB2VeluN3XtCQhLvqg&s',
      ratings: 4.5
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
      price: '$5.99',
      image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
      ratings: 4.3
    },
    {
      id: 3,
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
      price: '$10.99',
      image: 'https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
      ratings: 4.7
    },
    {
      id: 4,
      name: 'Mushroom Burger',
      description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
      price: '$10.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJv-PoBgECzVVvK-cxL8PiaHpmJmsIrJujGd06xCA1Q&s',
      ratings: 4.7
    },
    
  ];

const beverageItems = [
    {
      id: 1,
      name: 'Iced Coffee',
      description: 'Chilled coffee with a splash of milk and a touch of sweetness.',
      price: 3.49,
      image: 'https://www.cookingclassy.com/wp-content/uploads/2022/07/iced-coffee-05.jpg',
      ratings: 4.6
    },
    // Other beverage items...
];

function Order() {
  const [showToaster, setShowToaster] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [address, setAddress] = useState('');

  const handleQuantityChange = (id, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const totalCost = Object.entries(quantities).reduce((total, [id, quantity]) => {
    const foodItem = foodItems.find(item => item.id === parseInt(id));
    const beverageItem = beverageItems.find(item => item.id === parseInt(id));
    
    if (foodItem) {
      total += parseFloat(foodItem.price.replace('$', '')) * quantity;
    } else if (beverageItem) {
      total += beverageItem.price * quantity;
    }
    
    return total;
  }, 0);


  const handleConfirmOrder = () => {
    const confirm = window.confirm('Are you sure you want to confirm this order?');
    if (confirm) {
      setShowToaster(true);
      // You can add further logic here for order submission, API calls, etc.
      setTimeout(() => {
        setShowToaster(false);
        // Redirect to home screen after a delay
        window.location.href = '/';
      }, 3000); // 3000 milliseconds (3 seconds) delay
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Order Summary</h1>
      <div className="container mx-auto p-4">
        {/* Display food items */}
        <div className="flex flex-wrap justify-center gap-4">
        {foodItems.map(item => (
          <div key={item.id} className="max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex-grow flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden m-2">
            <div className="flex justify-center items-center p-4">
              <img className="h-32 w-32 object-cover rounded-lg" src={item.image} alt={item.name} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.price}</span>
              <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">⭐ {item.ratings}</span>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
    <div className="flex items-center">
      <span className="mr-2">Quantity:</span>
      <button
        onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 0) - 1)}
        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 focus:outline-none"
      >
        -
      </button>
      <span className="mx-2">{quantities[item.id] || 0}</span>
      <button
        onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 0) + 1)}
        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 focus:outline-none"
      >
        +
      </button>
    </div>
    
  </div>
          </div>
        ))}
      </div>
        {/* Display beverage items */}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Delivery Address</h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          placeholder="Enter your address"
        />
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleConfirmOrder}
          className="px-6 py-3 mb-20 bg-SurasaBrown text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
        >
          Confirm Order
        </button>
      </div>
      {showToaster && <Toaster message="Order placed successfully!" />}
    </div>
  );
}

export default Order;
