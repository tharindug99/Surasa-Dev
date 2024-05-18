import React from 'react';

const beverageItems = [
  {
    id: 1,
    name: 'Iced Coffee',
    description: 'Chilled coffee with a splash of milk and a touch of sweetness.',
    price: '$3.49',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2022/07/iced-coffee-05.jpg',
    ratings: 4.6
  },
  {
    id: 2,
    name: 'Lemonade',
    description: 'Freshly squeezed lemons with a hint of mint.',
    price: '$2.99',
    image: 'https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/Lemonade-2-2.jpg?resize=740%2C792&ssl=1',
    ratings: 4.7
  },
  {
    id: 3,
    name: 'Faluda',
    description: 'Freshly squeezed lemons with a hint of mint.',
    price: '$2.99',
    image: 'https://www.theflavorbender.com/wp-content/uploads/2015/05/Falooda-Social-Media-3329.jpg',
    ratings: 4.7
  },
  {
    id: 4,
    name: 'Cocktail Drink',
    description: 'Freshly squeezed lemons with a hint of mint.',
    price: '$2.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeIcMV2pbUcdoPQAcUic3CQAxqvqWyqtL2ruk56Fgzg&s',
    ratings: 4.7
  }
];

function Beverages() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {beverageItems.map(item => (
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

export default Beverages;
