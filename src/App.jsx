import { useState, createContext } from "react";
import "../src/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";
import { SingleCoinSummary } from "./components/routes/singleCoin/SingleCoinSummary";
import { Link } from "react-router-dom";
import MCROCTable from "./components/tables/MCTable";
import Vol24HrTable from "./components/tables/Vol24HourTable";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/coins/:coin_id" element={<SingleCoinSummary />} />
      <Route path="/rankings/marketcap" element={<MCROCTable />} />
      <Route path="/rankings/volumeroc" element={<Vol24HrTable />} />
    </Routes>
  );
}
export default App;
