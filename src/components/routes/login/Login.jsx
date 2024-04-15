import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { supabase } from '@/lib/supabaseClient';
import { useSupabaseAuth } from '@/components/context/AuthContext';
import LoadingScreen from '@/components/custom/LoadingScreen';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const { session } = useSupabaseAuth();
    const navigate = useNavigate()

    const signInWithEmail = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        

        if (error) {
            setError(error.message)
            console.error('Error signing in:', error.message);
            setPassword('')
        } else {
            setLoading(false);
            console.log('Login success', data);
        }
    };

    if (session) {
        console.log('Already logged in, redirecting...');
        
    }

    if (loading && !error) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <>
            <Container maxWidth='lg'>
                {/* <Navbar /> */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '80vh',
                        maxHeight: '100vh'
                    }}
                >
                    <Card sx={{ padding: '50px', width: '100%', maxWidth: '400px', height: '500px' }}>
                        <CardHeader title='Welcome Back!' sx={{ fontWeight: '500', padding: '0' }} />
                        <CardContent sx={{ fontWeight: '500', padding: '20px 0 0 0' }}>
                            <Typography variant='text' sx={{ fontWeight: '300', paddingLeft: '5px' }}>
                                Sign in to continue.
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '8px' }}>
                            <form onSubmit={signInWithEmail}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    margin="normal"
                                    value={email}
                                    sx={{ paddingBottom: '15px', width: '100%' }}
                                    onChange={(event) => setEmail(event.target.value)}
                                    error={!!error && !email}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    value={password}
                                    sx={{ width: '100%' }}
                                    onChange={(event) => setPassword(event.target.value)}
                                    error={!!error && !email}
                                />
                                <Typography sx={{ padding: '5px', fontSize: '1rem' }} color='error'>
                                    {error ? `${error}. Please try again.` : ''}
                                </Typography>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={email && password ? false : true}
                                    sx={{ marginTop: '20px', padding: '10px 20px', fontSize: '0.9rem' }}
                                >
                                    Sign In
                                </Button>
                                <Box sx={{ width: '100%' }}>
                                    <Button
                                        type="submit"
                                        variant="ghost"
                                        disableRipple
                                        sx={{ fontSize: '0.9rem', padding: '15px 0' }}
                                        onClick={() => navigate('/forgot-password')}
                                    >
                                        Forgot Password?
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </>
    );
}

export default Login;
