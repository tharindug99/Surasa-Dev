// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  Routes, Route } from 'react-router-dom';

import App from '../src/App';
import Order from '../src/pages/Order/Order.jsx';
import Test from '../src/pages/Dashbord/Test.jsx';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
    </Routes>
  )
}

export default Routers