import React from 'react';
import backgroundImg from '../src/assets/images/surasabg.jpg';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div  id="home"
          className="container px-10">
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

              {/* Right Section - Image */}
              <div data-aos="fade-left"
                  data-aos-offset="200"className="mt-8 lg:mt-20">
                <img
                  src={backgroundImg }
                  alt="Hero Image"
                  className="rounded-lg mx-auto mb-8 lg:ml-60 lg:mb-20 shadow-lg"
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


          {/* hero counter */}
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
                      Patient Satisfaction
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
                       Clinics Funtioning
                        </p>
                      </div>
                  </div>
                </div>

          {/* hero__section end       */}
          
          <div data-aos="fade-up"
            data-aos-offset="200" className="container lg:py-40 sm:py-10">
            <div className="lg:w-[740px] mx-auto ">
                 <h2 className=" heading text-center font-medium text-[50px]">Providing the best medical services in the country</h2> 
                 <p className="pt-6 heading text-center font-medium text-gray-500 text-[20px]">World Class healthcare for all. Our healthcare system offers unmatched health care for everyone...</p>  
            </div>

          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 pb-20 lg:mt-10">
            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={backgroundImg } className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">Find a Doctor</h1>
              <p className="text-center">Discover expert healthcare professionals to meet your medical needs.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={backgroundImg } className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">24hr Service</h1>
              <p className="text-center">Access around-the-clock assistance for immediate healthcare support and emergencies.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={backgroundImg } className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">All under one roof</h1>
              <p className="text-center">Experience comprehensive care with a wide range of medical services conveniently available in one location.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex p-4 flex-col items-center hover:cursor-pointer hover:border-2 hover:border-cyan-400 rounded-xl shadow-lg">
              <img src={backgroundImg } className="h-60 w-60" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">High quality service</h1>
              <p className="text-center">Receive top-notch medical care with a commitment to excellence, ensuring your well-being and satisfaction.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

          </div>

          

        


        </div>
  );
};

export default Home;
