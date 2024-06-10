import React from 'react';
import backgroundImg from '../../assets/images/surasabg.jpg';

function ContactField({ label, id, type }) {
    return (
        <div className="flex flex-col justify-center mt-4">
            <label className="mb-2 text-gray-700 font-bold" htmlFor={id}></label>
            <input
                id={id}
                className="px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type={type}
                placeholder={label}
                aria-label={label}
            />
        </div>
    );
}

const ContactUs = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${backgroundImg})`,
            }}
        >
            {/* Dark background overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Contact Us heading */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 py-10 text-6xl max-md:text-4xl text-white z-10">
                Contact Us
            </div>

            {/* Container for form and image */}
            <div className="relative flex justify-center items-center h-full z-10">
                <section className="px-[150px] py-5 bg-white bg-opacity-90 rounded-[40px] max-md:px-5 mt-[100px]">
                    <div className="flex gap-20 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <header className="flex flex-col  mt-20 max-md:mt-10 max-md:max-w-full">
                                <h1 className="text-4xl font-semibold tracking-wide leading-6  max-md:max-w-full">
                                    Get in <span className="text-yellow-400">touch</span>
                                </h1>
                            </header>
                            <p className="flex flex-col justify-center mt-11 text-sm tracking-normal leading-6 text-black max-md:mt-10 max-md:max-w-full">
                                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare
                                non id blandit netus.
                            </p>
                            <form className="flex flex-col mt-10">
                                <ContactField label="Contact Name" id="contactName" type="text" />
                                <ContactField label="Contact Phone" id="contactPhone" type="tel" />
                                <ContactField label="E-mail" id="email" type="email" />

                                <fieldset className="flex flex-col py-3 mt-11">
                                    <legend className="text-gray-700 font-bold mb-4">
                                        Let’s talk about your idea
                                    </legend>
                                    <div className="h-px bg-gray-400 mb-4"></div>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
                                    </label>
                                </fieldset>

                                <button
                                    type="submit"
                                    className="flex justify-center items-center px-6 py-3 mt-6 text-sm font-bold text-white uppercase bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex overflow-hidden relative flex-col items-start px-3.5 pt-4 pb-20 text-xs font-semibold leading-6 min-h-[707px] text-stone-900 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.5517247125711!2d80.78660499175767!3d6.705657787771506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38af5553d5aa7%3A0x8f0647dbd6e5cf54!2sFaculty%20of%20Agricultural%20Sciences!5e0!3m2!1sen!2slk!4v1718021824342!5m2!1sen!2slk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                                <div className="relative justify-center items-start px-10 py-7 max-w-full bg-white rounded-2xl w-[179px] max-md:px-5">
                                    <span className="text-sm text-stone-900">Headquarters</span>
                                    <br />
                                    <span className="text-sm font-bold leading-5 text-stone-900">Company s. r. o.</span>
                                    <br />
                                    <span className="text-sm leading-5 text-stone-900">Street. 51</span>
                                    <br />
                                    <span className="text-sm leading-5 text-stone-900">100 00 Prague</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ContactUs;
