// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import aboutBgImage from "../../assets/images/Aboutbg.png";


function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        from: {opacity: 0},
        config: {duration: 1000},
    });

    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!aboutRef.current) return;

            const top = aboutRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight * 0.75) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={aboutRef}
            className="relative flex flex-col  items-end px-16 py-20 text-white  max-md:px-5 bg-cover ] "
        >
            <img
                src={aboutBgImage}
                alt="Background image"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <animated.div
                style={props}
                className="flex relative justify-center items-center px-16 py-16 mt-9 max-w-full bg-stone-900 bg-opacity-40 rounded-[50px] w-[873px] max-md:px-5"
            >
                <div className="flex flex-col mb-7 max-w-full w-[585px]">
                    <h2 className="self-center text-6xl max-md:text-4xl">About</h2>
                    <p className="mt-16 text-base max-md:mt-10 max-md:max-w-full">
                        Welcome to Surasa website, the innovative restaurant run by talented undergraduates from the
                        Faculty of Agricultural Sciences at Sabaragamuwa University of Sri Lanka.
                        <br/>
                        <br/>
                        Our mission is to provide students with delicious and nutritious meals while delivering
                        exceptional value. Through our unique approach, we prioritize the importance of good nutrition
                        and aim to promote healthy eating habits among our student community. Surasa is also the perfect
                        venue for your special occasions! Whether it's a birthday party or a celebration, our dedicated
                        team will ensure a memorable experience. In addition to our regular offerings, we specialize in
                        crafting personalized menus to suit the unique needs of your event. Our team of passionate chefs
                        and attentive staff will go above and beyond to make your special occasion truly remarkable.
                        <br/>
                        <br/>
                        On our website, you will find a wide range of mouthwatering dishes crafted from fresh, locally
                        sourced ingredients. Join us on this culinary journey where great taste meets affordability.
                    </p>
                </div>
            </animated.div>
        </section>
    );
}

export default AboutUs;
