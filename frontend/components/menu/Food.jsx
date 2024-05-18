import React from 'react';
// import axios from 'axios';

const foodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
    price: '$8.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumoMickQs_jcLYaMyiQhNG4FsxB2VeluN3XtCQhLvqg&s',
    ratings: 4.5,
    type:'food'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
    price: '$5.99',
    image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
    ratings: 4.3,
    type:'food'
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    price: '$10.99',
    image: 'https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
    ratings: 4.7,
    type:'food'
  },
  {
    id: 4,
    name: 'Mushroom Burger',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    price: '$10.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJv-PoBgECzVVvK-cxL8PiaHpmJmsIrJujGd06xCA1Q&s',
    ratings: 4.7,
    type:'food'
  },
  
];

function Food() {
  return (
    <div className="container mx-auto p-4">
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
              <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">⭐ {item.ratings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
