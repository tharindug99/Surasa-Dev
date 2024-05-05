import React, { useState } from 'react';
import Footer from '../components/footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission, such as sending the data to a server or processing it.
    console.log('Form submitted with data:', formData);
  };

  return (
    <div id="contact">
      <section className="shadow-lg m-5">
        <div className="px-4 mx-auto max-w-screen-md ">
          <h2 className="heading text-center">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center mt-4">
            Got a technical issue? Want to send feedback? Send us a message, and we will be in touch with you shortly!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto px-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white px-4 py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </section>

      
    </div>
  );
};

export default Contact;
