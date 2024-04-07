import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { SupabaseAuthProvider } from './components/context/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SupabaseAuthProvider>
                <App />
            </SupabaseAuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
