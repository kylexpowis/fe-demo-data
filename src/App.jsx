import React, { useEffect } from "react";
import { useSupabaseAuth } from "./components/context/AuthContext";
import { ThemeProvider } from "./components/context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import {
  LoggedIn,
  LoggedOut,
} from "./components/routes/navigation/RouteManager";
import { useNavigate } from "react-router-dom";

function App() {
  const { session, loading } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && session && window.location.pathname === "/login-portal") {
      navigate("/");
    }
  }, [session, loading, navigate]);

  return (
    <div>
      <CssBaseline />
      {session ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
}

export default App;
