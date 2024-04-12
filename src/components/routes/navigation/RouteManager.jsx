import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../landing/LandingPage";
import ForgotPassword from "../login/ForgotPassword";
import Dashboard from "../dashboard/Dashboard";
import SingleCoinView from "../singleCoin/SingleCoinView";
import AccountPage from "../account/AccountPage";
import Login from "../login/Login";
import MarketcapRanking from "../rankings/MarketcapRanking";
import VolumesRanking from "../rankings/VolumesRanking";
import NotFound from "../404 Not Found/404NotFound";

export const LoggedOut = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-portal" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export const LoggedIn = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rankings/marketcap" element={<MarketcapRanking />} />
        <Route path="/rankings/volume" element={<VolumesRanking />} />
        <Route path="/coins/:coin_id" element={<SingleCoinView />} />
        <Route path="/my-account" element={<AccountPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
