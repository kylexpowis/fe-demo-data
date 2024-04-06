import { supabase } from '@/lib/supabaseClient';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function SupabaseAuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        if (!session) {
            navigate('/login-portal')
        } else {
            navigate('/dashboard')
        }

        return () => subscription.unsubscribe();
    }, [navigate, session]);

    return (
        <AuthContext.Provider value={{ session, setSession }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useSupabaseAuth = () => {
    return useContext(AuthContext);
}
