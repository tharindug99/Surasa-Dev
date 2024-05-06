import React from 'react'

function AboutUs() {
  return (
    <div id="about" className="container text-4xl text-black">

      <div data-aos="fade-up" data-aos-offset="200" className="container lg:py-2 sm:py-10">
        <div className="lg:w-[740px] mx-auto ">
          <h2 className="heading text-center font-medium text-[50px]">About Us</h2>
          <p className="pt-6 heading text-center font-medium text-gray-500 text-[20px]">Surasa is ............... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, nemo. Temporibus numquam atque, quisquam eum maiores fugit voluptatibus inventore molestiae maxime? Esse facilis similique maxime praesentium repellat, dolorem saepe fugiat?</p>
        </div>
      </div>


      {/* Indicators*/}
      <div data-aos="fade-up" 
           data-aos-offset="200" 
           className="text-start mt-[30px]  flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px] lg:mx-20">
        <div className="lg:w-1/3 md:w-full text-center">
          <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">2+</h2>
          <div>
            <span className="lg:w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]" />
            <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">Years of Experience</p>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-full text-center">
          <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">100%</h2>
          <div>
            <span className="lg:w-[100px] h-2 bg-teal-500 rounded-full block mt-[-14px]" />
            <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">Customer Satisfaction</p>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-full text-center">
          <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">15+</h2>
          <div>
            <span className="lg:w-[100px] sm:w-[600px] h-2 bg-purple-500 rounded-full block mt-[-14px]" />
            <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">Food Products</p>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-full text-center">
          <h2 className="text-start text-[36px] py-5 leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">2+</h2>
          <div>
            <span className="lg:w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]" />
            <p className="text-start py-5 text-[40px] font-bold xs:text-[20px]">Years of Experience</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default AboutUs