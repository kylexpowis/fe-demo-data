import { supabase } from '@/lib/supabaseClient';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function SupabaseAuthProvider({ children }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ session, setSession }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useSupabaseAuth = () => {
    return useContext(AuthContext);
}
