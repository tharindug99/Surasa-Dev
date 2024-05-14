import React from 'react';
// import axios from 'axios';

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
    image: 'images/caesar_salad.jpg',
    ratings: 4.3
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    price: '$10.99',
    image: 'images/pasta_carbonara.jpg',
    ratings: 4.7
  },
  {
    id: 4,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    price: '$10.99',
    image: 'images/pasta_carbonara.jpg',
    ratings: 4.7
  },
  
];

function Food() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {foodItems.map(item => (
          <div key={item.id} className="max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex-grow flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden m-2">
            <div className="flex justify-center items-center p-4">
              <img className="h-32 w-32 object-cover" src={item.image} alt={item.name} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.price}</span>
              <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">⭐ {item.ratings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
