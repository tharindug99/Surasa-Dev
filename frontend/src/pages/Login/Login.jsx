import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../../components/header/NavBar';
import Footer from '../../../components/footer/Footer';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobile_no: '',
    password: '',
  });

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/home');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const displayErrorMessages = (errors) => {
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        errors[key].forEach((errorMsg) => {
          toast.error(errorMsg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'red', color: 'white' },
          });
        });
      }
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      const result = response.data;

      if (response.status === 401) {
        toast.error("Invalid credentials. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: 'red', color: 'white' },
        });
      } else if (result.errors) {
        displayErrorMessages(result.errors);
      } else {
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/home');
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: 'white', color: 'green' },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred during login.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: 'red', color: 'white' },
      });
    }
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <ToastContainer />
        <div className="bg-white shadow-md rounded-lg flex">
          <div className="hidden md:block w-1/2">
            <img
              src="https://source.unsplash.com/1600x900/?restaurant"
              alt="Restaurant"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Mobile No.</label>
                <input
                  type="text"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
