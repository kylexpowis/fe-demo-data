import React from 'react';
import { Container, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '@/components/custom/Navbar';

function Login() {
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
                        <CardHeader title='Welcome Back!' sx={{fontWeight: '500', padding: '0'}}/>
                        <CardContent sx={{fontWeight: '500', padding: '20px 0 0 0'}}>
                            <Typography variant='text' sx={{fontWeight: '300', paddingLeft: '5px'}}>
                                Sign in to continue.
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '8px'}}>
                            <form>
                                <TextField
                                    id="username"
                                    label="Username"
                                    variant="standard"
                                    margin="normal"
                                    sx={{ paddingBottom: '15px', width: '100%' }}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    variant="standard"
                                    margin="normal"
                                    sx={{ width: '100%' }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ marginTop: '20px', padding: '10px 20px', fontSize: '0.9rem' }}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    disableRipple
                                    sx={{ marginTop: '20px', padding: '10px 20px', fontSize: '0.9rem' }}
                                >
                                    Sign In
                                </Button>
                            </form>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </>
    );
}

export default Login;
