import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; 
import { useNavigate } from 'react-router-dom';

export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setSession(null);
                navigate('/')
            } else if (session) {
                setSession(session);
            }
        });

        return () => {
            authListener.unsubscribe();
        };
    }, [navigate]);

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
};


