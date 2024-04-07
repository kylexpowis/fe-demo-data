import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../landing/LandingPage';
import ForgotPassword from '../login/ForgotPassword';
import Dashboard from '../dashboard/Dashboard';
import SingleCoinView from '../singleCoin/SingleCoinView';
import AccountPage from '../account/AccountPage';
import Login from '../login/Login';

export const LoggedOut = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login-portal" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </div>
    )
}

export const LoggedIn = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard /> } />
                <Route path="/coins/:coin_id" element={<SingleCoinView />}  />
                <Route path="/my-account" element={ <AccountPage />}/>
            </Routes>
        </div>
    )
}
