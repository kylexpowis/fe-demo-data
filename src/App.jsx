import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import Dashboard from './components/routes/dashboard/Dashboard';
import SingleCoinView from './components/routes/singleCoin/SingleCoinView';
import LandingPage from './components/routes/landing/LandingPage';
import Login from './components/routes/login/Login';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-portal" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coins/:coin_id" element={<SingleCoinView />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
