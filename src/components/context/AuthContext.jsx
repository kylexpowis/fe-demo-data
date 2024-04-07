import { supabase } from '@/lib/supabaseClient';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function SupabaseAuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [userDetails, setUserDetails] = useState({
        name: `User${Math.floor(Math.random() * 1000)}`,
        email: null,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session && session.user) {
                setLoading(false)
                const displayName = session.user.user_metadata?.displayName; 
                const email = session.user.email;

                setUserDetails({
                    name: displayName, 
                    email: email,
                });
                if (displayName === '') {
                    setUserDetails({
                        name: `User${Math.floor(Math.random() * 1000)}`
                    })
                }
            } else {
                setUserDetails({ name: null, email: null });
            }
        })

        

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, [session]);

    return (
        <AuthContext.Provider value={{ session, setSession, userDetails, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useSupabaseAuth = () => {
    return useContext(AuthContext);
}
