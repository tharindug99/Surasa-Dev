import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FoodItem({ type }) {
  const foodItems = [
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
        price: '$8.99',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumoMickQs_jcLYaMyiQhNG4FsxB2VeluN3XtCQhLvqg&s',
        ratings: 4.5,
        type: 'food'
    },
    {
        id: 2,
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.',
        price: '$5.99',
        image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
        ratings: 4.3,
        type: 'food'
    },
    {
        id: 3,
        name: 'Pasta Carbonara',
        description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
        price: '$10.99',
        image: 'https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
        ratings: 4.7,
        type: 'food'
    },
    // Other food items
    {
        id: 5,
        name: 'Iced Coffee',
        description: 'Chilled coffee with a splash of milk and a touch of sweetness.',
        price: '$3.49',
        image: 'https://www.cookingclassy.com/wp-content/uploads/2022/07/iced-coffee-05.jpg',
        ratings: 4.6,
        type: 'beverage'
    },
    {
        id: 6,
        name: 'Lemonade',
        description: 'Freshly squeezed lemons with a hint of mint.',
        price: '$2.99',
        image: 'https://i0.wp.com/thejoyfilledkitchen.com/wp-content/uploads/2021/04/Lemonade-2-2.jpg?resize=740%2C792&ssl=1',
        ratings: 4.7,
        type: 'beverage'
    },
    // Other beverage items
];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const filteredFoodItems = foodItems.filter(item => {
        if (type === 'All') {
            return true; // Show all items if type is 'All'
        } else if (type === 'Food') {
            return item.type === 'food'; // Show only food items if type is 'Food'
        } else if (type === 'Beverages') {
            return item.type === 'beverage'; // Show only beverage items if type is 'Beverages'
        }
        return false;
    });

    return (
        <div>
            <div className="container mx-auto p-4 w-1/2">
                <Slider {...settings}>
                    {filteredFoodItems.map(item => (
                        <div key={item.id}>
                            <div className=" max-w-xs w-full max-h-40 sm:w-1/2 md:w-1/3 lg:w-4/5 flex-grow flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden m-2">
                                <div className="flex justify-center items-center p-4">
                                    <img className="h-32 w-32 object-cover rounded-lg" src={item.image} alt={item.name} />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="text-black font-bold text-md mb-2">{item.name}</div>
                                    <p className="text-gray-700 text-base">{item.description}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.price}</span>
                                    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Edit</button>
                                </div>
                            
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default FoodItem;
