import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; 

export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                setSession(null);
            } else if (session) {
                setSession(session);
            }
        });

        return () => {
            authListener.unsubscribe();
        };
    }, []);

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
};


