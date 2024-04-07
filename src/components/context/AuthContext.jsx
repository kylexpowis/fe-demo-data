import { supabase } from '@/lib/supabaseClient';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function SupabaseAuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false)
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });


        if (!session) {
            setName(null);
            setEmail(null);
        }

        return () => subscription.unsubscribe();
    }, [session]);

    return (
        <AuthContext.Provider value={{ session, setSession, name, setName, email, setEmail, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useSupabaseAuth = () => {
    return useContext(AuthContext);
}
