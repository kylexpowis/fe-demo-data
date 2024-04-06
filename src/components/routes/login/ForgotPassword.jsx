import React, { useState } from 'react';
import { Container, Box, Card, CardHeader, CardContent, TextField, Button, Typography, CircularProgress } from '@mui/material';
import Navbar from '@/components/custom/Navbar';
import { supabase } from '@/lib/supabaseClient';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleResetPassword = async (event) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setError('');
        setMessage('');

        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'YOUR_REDIRECT_URL_AFTER_RESET',
        });

        setLoading(false);

        if (error) {
            setError(error.message);
            console.error('Error requesting email reset link:', error);
        } else {
            setSubmitted(true)
            console.log('Successfully sent password reset link!', data);
            setMessage('Check your email for the password reset link.', data);
        }
    };

    return (
        <>
            <Container maxWidth='lg'>
                <Navbar />
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
                        <CardHeader title='Reset Password' />
                        <CardContent>
                            <Typography variant='text'>
                                Enter your email to receive a password reset link if the address is recognised.
                            </Typography>
                            <form onSubmit={handleResetPassword} noValidate autoComplete="off">
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    margin="normal"
                                    value={email}
                                    fullWidth
                                    disabled ={submitted}
                                    onChange={(event) => setEmail(event.target.value)}
                                    error={!!error}
                                    helperText={error ? error : ''}
                                />
                                {loading ? (
                                    <CircularProgress size={24} sx={{ display: 'block', mx: 'auto', my: 2 }} />
                                ) : (
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={!email || submitted}
                                        sx={{ marginTop: '20px', padding: '10px 20px', fontSize: '0.9rem', display: 'block' }}
                                    >
                                        Submit
                                    </Button>
                                )}
                                {message && <Typography color="primary" sx={{ mt: 2 }}>{message}</Typography>}
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    );
}

export default ForgotPassword;
