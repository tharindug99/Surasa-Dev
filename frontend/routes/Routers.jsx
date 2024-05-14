import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import Dashboard from '../admin/pages/Dashboard';
import App from '../src/App';
import Order from '../src/pages/Order';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default Routers