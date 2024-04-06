import "../src/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";
import { SingleCoinView } from "./components/routes/singleCoin/SingleCoinView";
import LandingPage from "./components/routes/landing/LandingPage";
import Login from "./components/routes/login/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coins/:coin_id" element={<SingleCoinView />} />
      </Routes>
  );
}

export default App;
