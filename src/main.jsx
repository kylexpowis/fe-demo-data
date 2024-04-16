import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SupabaseAuthProvider } from "./components/context/AuthContext.jsx";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <SupabaseAuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SupabaseAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
