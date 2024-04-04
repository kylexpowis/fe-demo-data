import "../src/app.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";
import { SingleCoinSummary } from "./components/routes/singleCoin/SingleCoinSummary";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/coins/:coin_id" element={<SingleCoinSummary />} />
    </Routes>
  );
}

export default App;
