import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Register from '../auth/Register';
import AuthCard from '../auth/Login/Login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<AuthCard/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
