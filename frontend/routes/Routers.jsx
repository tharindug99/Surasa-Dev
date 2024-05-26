// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  Routes, Route } from 'react-router-dom';

import App from '../src/App';
import Order from '../src/pages/Order/Order.jsx';
import DashboardLayout from '../src/pages/Dashbord/screens/DashboardLayout.jsx';
import Register from '../src/pages/Register/Register.jsx';
import Login from '../src/pages/Login/Login.jsx';
import Protected from './Protected.jsx';

function Routers() 
{
  return (
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/home" element={<App/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/dashboard" element={<DashboardLayout/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  )
}

export default Routers