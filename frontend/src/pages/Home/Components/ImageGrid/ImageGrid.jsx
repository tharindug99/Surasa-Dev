// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import Lottie from 'lottie-react'; 
import PropTypes from "prop-types";
import {useSpring, animated} from "react-spring";
import {Link} from "react-scroll";
import foodAnim1 from '../../../../assets/animations/foodAnimation.json';

function ImageGrid({ images }) {
    // Define animation properties
    const props = useSpring({
        from: { opacity: 0.5, transform: "translateX(100%)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { duration: 800 },
    });

    return (
        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.slice(0, 2).map((image, index) => (
                        <animated.div
                            key={index}
                            style={props}
                            className={`flex flex-col ${
                                index === 0
                                    ? "w-6/12 max-md:ml-0 max-md:w-full "
                                    : "ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                            }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`${
                                    index === 0
                                        ? "grow mt-16 w-full aspect-[1.33] max-md:mt-10 max-md:max-w-full rounded-[10px]"
                                        : "w-full aspect-square max-md:mt-2 rounded-[10px]"
                                }`}
                                loading="lazy"
                            />
                        </animated.div>
                    ))}
                </div>
            </div>
            <div className="self-center mt-3 max-w-full w-[540px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {images.slice(2).map((image, index) => (
                        <animated.div
                            key={index}
                            style={props}
                            className={`flex flex-col ${
                                index === 0
                                    ? "w-6/12 max-md:ml-0 max-md:w-full"
                                    : "ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                            }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`${
                                    index === 0
                                        ? "grow w-full aspect-[0.75] max-md:mt-2 rounded-[10px]"
                                        : "w-full aspect-square max-md:mt-2 rounded-[10px]"
                                }`}
                                loading="lazy"
                            />
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

ImageGrid.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

function MyComponent() {

    const foodAnimRef = useRef(null);
    const images = [
        {
            src: "../../src/assets/images/FoodItem1.jpg",
            alt: "Image 1",
        },
        {
            src: "../../src/assets/images/FoodItem2.jpg",
            alt: "Image 2",
        },
        {
            src: "../../src/assets/images/foodItem5.jpg",
            alt: "Image 3",
        },
        {
            src: "../../src/assets/images/pasta.jpg",
            alt: "pasta",
        },
    ];

    return (
        <section className="lg:pl-40 lg:pt-2 
                            md:pl-10
                            sm:pl-40
                            pl-8        pr-40 pt-10 pb-40 ">
            <div className="flex flex-col">
                <div className="w-full ">
                    <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                        <div className="lg:w-6/12
                                        flex flex-col  max-md:ml-0 max-md:w-full ">
                            <div className="lg:mt-10
                                            flex flex-col px-5  lg:w-4/5 max-md:mt-10 max-md:max-w-full mb-10 ">
                                <h1 className="text-5xl font-bold text-black leading-[55px] max-md:max-w-full max-md:text-center">
                                    Welcome to <br/> Surasa
                                    </h1>
                                        <div className="h-12 w-12 my-2 self-center">
                                            <Lottie 
                                                lottieRef={foodAnimRef}
                                                animationData={foodAnim1}
                                                onComplete={() => {
                                                foodAnimRef.current?.stop
                                                }}
                                                loop={false}
                                            />
                                        </div>
                                        <p className="mt-4 text-xl text-zinc-950 max-md:mt-10 max-md:w-full max-md:text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore eos fugiat
                                            id itaque maiores minus odit quisquam ratione voluptas.
                                        </p>

                            </div>
                            <Link to="booking" smooth={true} duration={500}>
                                <button
                                    className="
                                    lg:px-8 lg:py-3 lg:ml-5 lg:rounded-[20px]
                                    md:px-8 md:py-3 md:ml-5
                                    sm:ml-14 
                                    justify-center self-start  rounded-[10px] leading-8 bg-SurasaBrown text-white max-md:px-5  hover:bg-yellow-300 hover:text-white border-yellow-500 hover:border-yellow-500">
                                    Book Now
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <ImageGrid images={images}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyComponent;
