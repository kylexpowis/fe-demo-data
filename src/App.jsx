import { useState, createContext } from "react";
import "../src/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";
import { SingleCoinView } from "./components/routes/singleCoin/SingleCoinView";
import { Link } from "react-router-dom";
import MCROCTable from "./components/tables/MCTable";

function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coins/:coin_id" element={<SingleCoinView />} />
            <Route path="/rankings/marketcap" element={<MCROCTable />} />
        </Routes>
    );
}

export default App;
