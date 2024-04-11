/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import LoadingScreen from '../custom/LoadingScreen';
import { supabase } from '@/lib/supabaseClient';

const AuthContext = createContext();

export function SupabaseAuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState({
        name: `User${Math.floor(Math.random() * 1000)}`,
        email: null,
    });

    useEffect(() => {
        checkSession();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            updateSession(session);
        });
        return () => subscription.unsubscribe();
    });
    const checkSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        updateSession(session);
    };
    const updateSession = (session) => {
        setSession(session);
        setLoading(true);
        if (session && session.user) {
            const displayName = session.user.user_metadata?.displayName || `User${Math.floor(Math.random() * 1000)}`;
            const email = session.user.email;
            setUserDetails({ name: displayName, email });
        } else {
            setUserDetails({ name: null, email: null });
        }
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ session, setSession, userDetails, loading }}>
            {loading ? <LoadingScreen sx={{ zIndex: 5 }} /> : children}
        </AuthContext.Provider>
    );
}

export const useSupabaseAuth = () => useContext(AuthContext);
