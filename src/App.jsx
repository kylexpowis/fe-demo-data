import "../src/app.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";
import { SingleCoinView } from "./components/routes/singleCoin/SingleCoinView";
import { Link } from "react-router-dom";
import { SingleCoinSummary } from "./components/routes/singleCoin/SingleCoinSummary";
import MCROCTable from "./components/tables/MCTable";
import Vol24HrTable from "./components/tables/Vol24HourTable";
import { ThemeProvider } from "./components/theme-provider";
import LandingPage from "./components/routes/landing/LandingPage";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
      <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coins/:coin_id" element={<SingleCoinView />} />
        <Route path="/rankings/marketcap" element={<MCROCTable />} />
        <Route path="/rankings/volumeroc" element={<Vol24HrTable />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
