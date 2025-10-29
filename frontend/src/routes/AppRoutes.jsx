import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import UserRegister from '../pages/auth/UserRegister.jsx';
import UserLogin from '../pages/auth/UserLogin.jsx';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister.jsx';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin.jsx';
import Home from '../pages/general/Home.jsx';
import CreateFood from '../pages/food-partner/CreateFood.jsx';
const AppRoutes = () => {
  return (
    <div>
      
      <Router>
        <Routes >
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
                <Route path="/" element={<Home/>} />
                <Route path="create-food" element={<CreateFood/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default AppRoutes