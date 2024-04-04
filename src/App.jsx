import { useState, createContext } from "react";
import "../src/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";
import { Link } from "react-router-dom";

function App() {

    return (
        
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            
    );
}

export default App;