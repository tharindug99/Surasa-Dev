import React from 'react';
import backgroundImg from '../src/assets/images/surasabg.jpg';
import MenuImg from '../src/assets/images/MenuImg.jpg';
import FoodItem1 from '../src/assets/images/FoodItem1.jpg'
import SurroundingImg from '../src/assets/images/surroundings.jpg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div  id="home"
          className="container px-10 mt-6">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              {/* Left Section */}
              <div data-aos="fade-up"
                   data-aos-offset="200"className="lg:w-[570px] space-y-10">
                <h1 className="text-[36px] leading-[46px] font-[700] md:text-[60px] md:leading-[70px]">
                  Welcome to Surasa!!
                </h1>

                <p className="text_para w-full lg:w-[800px]">
                  "Satisy your hunger needs, with an authentic culinary experience !!"
                </p>

                <button className='p-4 rounded-2xl bg-SurasaBrown text-white'>
                  Book Surasa Now!
                </button>

                
              </div>

              {/* Left Section - Image */}
              <div data-aos="fade-left"
                   data-aos-offset="200"
                   className="mt-0 flex flex-col">
                <img
                  src={MenuImg}
                  alt="Hero Image"
                  className="rounded-lg mx-8 gap-x-10 sm:mx-4 lg:ml-20 lg:mb-4 shadow-lg"
                  style={{
                    width: '250px',
                    height: '100%',
                    // Adjust dimensions for lg screens
                    '@media (min-width: 1024px)': {
                      width: '250px',
                      height: '700px',
                    },
                    '@media (max-width: 767px)': {
                      width: '300px',
                      height: '300px',
                    },
                  }}
                />

            <div data-aos="fade-left"
                   data-aos-offset="200"
                   className="mt-0 flex flex-col">
                <img
                  src={FoodItem1}
                  alt="Hero Image"
                  className="rounded-lg sm:mx-4 lg:ml-10 lg:mb-2 shadow-lg"
                  style={{
                    width: '300px',
                    height: '100%',
                    // Adjust dimensions for lg screens
                    '@media (min-width: 1024px)': {
                      width: '250px',
                      height: '700px',
                    },
                    '@media (max-width: 767px)': {
                      width: '300px',
                      height: '300px',
                    },
                  }}
                />
                </div>

                
              </div>



              <div data-aos="fade-left"
                  data-aos-offset="200"className="mx-4">
                <img
                  src={backgroundImg}
                  alt="Hero Image"
                  className="rounded-lg lg:mb-10 shadow-lg"
                  style={{
                    width: '500px',
                    height: '100%',
                    // Adjust dimensions for lg screens
                    '@media (min-width: 1024px)': {
                      width: '500px',
                      height: '500px',
                    },
                    '@media (max-width: 767px)': {
                      width: '300px',
                      height: '300px',
                    },
                  }}
                />

                
              </div>

              

            </div>
          </div>


          {/* Indicators*/}
          <div data-aos="fade-up"
            data-aos-offset="200" className="text-start mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px]">
                  <div className="lg:w-1/3 md:w-full text-center">
                    <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                      2+
                    </h2>
                      <div>
                        <span className="lg:w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]" />
                        <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">
                      Years of Experience 
                        </p>
                      </div>
                    
                    
                  </div>

                  <div className="lg:w-1/3 md:w-full text-center">
                    <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                      100%
                    </h2>
                    <div>
                        <span className="lg:w-[100px] h-2 bg-teal-500 rounded-full block mt-[-14px]" />
                        <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">
                      Customer Satisfaction
                        </p>
                      </div>
                  </div>

                  <div className="lg:w-1/3 md:w-full text-center">
                    <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                      15+
                    </h2>
                    <div>
                        <span className="lg:w-[100px] sm:w-[600px] h-2 bg-purple-500 rounded-full block mt-[-14px]" />
                        <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">
                       Food Products
                        </p>
                      </div>
                  </div>
                </div>

          
          
          <div data-aos="fade-up"
            data-aos-offset="200" className="container lg:py-40 sm:py-10">
            <div className="lg:w-[740px] mx-auto ">
                 <h2 className=" heading text-center font-medium text-[50px]">Providing the best medical services in the country</h2> 
                 <p className="pt-6 heading text-center font-medium text-gray-500 text-[20px]">World Class healthcare for all. Our healthcare system offers unmatched health care for everyone...</p>  
            </div>

          </div>
        </div>
  );
};

export default Home;
