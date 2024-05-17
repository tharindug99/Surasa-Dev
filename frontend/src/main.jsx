import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Routers from '../routes/Routers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />
      <Routers />
    </BrowserRouter> 
  </React.StrictMode>,
)
