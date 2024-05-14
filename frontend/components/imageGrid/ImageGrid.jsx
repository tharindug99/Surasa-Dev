// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import {useSpring, animated} from "react-spring";
import {Link} from "react-scroll";

function ImageGrid({images}) {
    // Define animation properties
    const props = useSpring({
        from: {opacity: 0.5, transform: "translateX(100%)"},
        to: {opacity: 1, transform: "translateX(0)"},
        config: {duration: 800},
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
            src: "../../src/assets/images/FoodItem3.jpg",
            alt: "Image 3",
        },
        {
            src: "../../src/assets/images/FoodItem5.jpg",
            alt: "Image 4",
        },
    ];

    return (
        <section className="pl-40 pr-40 pt-10 pb-40">
            <div className="flex flex-col">
                <div className="w-full max-md:max-w-full">
                    <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
                            <div className="flex flex-col px-5 mt-20 max-md:mt-10 max-md:max-w-full mb-20 ">
                                <h1 className="text-5xl font-bold text-black leading-[55px] max-md:max-w-full">
                                    Welcome to <br/> Surasa
                                </h1>
                                <p className="mt-10 text-xl text-zinc-950 max-md:mt-10 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore eos fugiat
                                    id itaque maiores minus odit quisquam ratione voluptas. Aut inventore, maiores nobis
                                    non nulla odit ratione voluptatem voluptatibus. Autem magnam odit reiciendis?
                                    Commodi
                                    exercitationem hic iusto, maiores maxime officia quibusdam voluptatum? Accusantium
                                    at delectus distinctio eligendi facere incidunt laboriosam, porro recusandae
                                    repellendus sapiente sint, velit voluptates voluptatibus. Ad laudantium magnam
                                    molestiae nulla
                                    quidem. Amet aperiam at consectetur cupiditate eius eveniet fugiat iste laudantium
                                    molestiae, necessitatibus neque nihil omnis optio provident quia, quos rerum?
                                    Deleniti ea iste quas quasi quia reiciendis repellendus vitae voluptatibus. Alias
                                    architecto
                                    culpa debitis distinctio doloribus, harum illum, incidunt libero magnam modi
                                    pariatur perferendis quidem
                                </p>
                            </div>
                            <Link to="booking" smooth={true} duration={500}>
                                <button
                                    className="justify-center self-start px-10 py-4 rounded-[25px]  leading-8 bg-SurasaBrown text-white max-md:px-5 ml-5 hover:bg-yellow-300 hover:text-white border-yellow-500 hover:border-yellow-500">
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
        </section>);
}

export default MyComponent;
