import React, { useRef } from 'react';
import Lottie from 'lottie-react'; 
import foodAnim1 from '../assets/animations/foodAnimation.json';
import FoodItem1 from '../assets/images/FoodItem1.jpg';
import FoodItem2 from '../assets/images/fooditem2.jpg';
import FoodItem3 from '../assets/images/fooditem5.jpg';
import FoodItem4 from '../assets/images/pasta.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  const foodAnimRef = useRef(null);

  return (
    <div id="home" className="container lg:px-10 md:px-6 sm:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 md:ml-14 sm:ml-10 mx-8">
        {/* Left Section */}
        <div data-aos="fade-up" data-aos-offset="200" className="space-y-10 mt-10 lg:mt-2">
          <h1 className="text-[36px] lg:mt-20 lg:pt-12 leading-[46px] font-[700] md:text-[60px] md:leading-[70px]">
            <span>Welcome</span><br/>
            <span>to Surasa!!</span>
          </h1>
          <p className="text_para mt-10">
            "Satisfy your hunger needs, with an authentic culinary experience !!"
            <div className='flex align-items-center items-center 
            lg:ml-52 
            md:ml-28
            sm:ml-16
            ml-14'>
              <div className="h-12 w-12 my-2">
              <Lottie 
                lottieRef={foodAnimRef}
                animationData={foodAnim1}
                onComplete={() => {
                  foodAnimRef.current?.stop
                }}
                loop={true}
              />
              </div>
              
        </div>
          </p>
          <Link to="booking" smooth={true} duration={500}>
            <button className="lg:my-8 py-4 px-10 rounded-[25px] bg-SurasaBrown text-white">
              Book Now
            </button>
          </Link>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 gap-5 mb-20 lg:mt-[-100px]">
          <div className="grid grid-cols-2 gap-1">
            <div className="lg:mt-16 sm:mt-1">
              <img
                src={FoodItem1}
                alt="Food Item Image"
                className="rounded-lg shadow-lg max-h-60
                lg:h-auto lg:mt-28 lg:w-auto
                md:h-auto md:mt-20 md:w-auto
                sm:h-auto sm:mt-24 sm:w-auto
                mt-10"
              />
            </div>

            <img
              src={FoodItem2}
              alt="Food Item Image"
              className="rounded-lg shadow-lg 
                lg:h-auto lg:mt-28
                md:h-auto md:mt-7
                sm:h-auto sm:mt-20"
            />

            <img
              src={FoodItem3}
              alt="Food Item Image"
              className="rounded-lg shadow-lg 
                lg:ml-16 lg:h-3/4 
                md:mr-8 md:h-3/4
                sm:ml-5 sm:h-3/4"
            />

            <img
              src={FoodItem4}
              alt="Food Item Image"
              className="rounded-lg shadow-lg 
                lg:h-1/2 
                md:h-1/2 
                sm:h-1/2 mb-3"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
