import "../src/app.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/routes/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
