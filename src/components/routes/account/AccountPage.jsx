import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Card, Avatar, IconButton, Alert, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { supabase } from '@/lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/custom/Header';
import { useSupabaseAuth } from '@/components/context/AuthContext';

function AccountPage() {
    const [newUserDetails, setUserDetails] = useState({
        displayName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState({ type: '', content: '' });
    const navigate = useNavigate();
    const { userDetails } = useSupabaseAuth();
    const { name, email } = userDetails;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage({ type: '', content: '' });

        if (newUserDetails.newPassword !== newUserDetails.confirmPassword) {
            setMessage({ type: 'error', content: 'New passwords do not match.' });
            return;
        }

        try {
            if (newUserDetails.email) {
                await supabase.auth.updateUser({ email: newUserDetails.email });
            }
            if (newUserDetails.newPassword) {
                await supabase.auth.updateUser({ password: newUserDetails.newPassword });
            }
            await supabase.auth.updateUser({ data: { displayName: newUserDetails.displayName } });

            console.log(newUserDetails);
            setMessage({ type: 'success', content: 'Account updated successfully.' });
        } catch (error) {
            setMessage({ type: 'error', content: error.error_description || error.message });
        }
    };

    return (
        <>
            <Header />
            <Container component="main" maxWidth="md">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 60, height: 60 }}>
                    </Avatar>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <EditIcon color='primary' />
                    </IconButton>
                    <Stack sx={{width: '100:', display: 'flex', justifyContent: 'center', AlignItems: 'center', pb: '10px'}} spacing={1}>
                            <Typography variant='h4' color='primary' sx={{fontWeight: '500'}}>{name || 'Set Display Name'}</Typography>
                            <Typography variant='h7' sx={{alignSelf: 'center'}} color='#777'>{email}</Typography>
                        </Stack>  
                    <Typography component="h" variant="h5" sx={{ mb: 1, mt: '2' }}>
                        Account Settings
                    </Typography>
                    {message.content && (
                        <Alert severity={message.type} sx={{ width: '100%', mb: 2 }}>
                            {message.content}
                        </Alert>
                    )}
                    <Card sx={{ mt: 3, p: 4, width: '100%' }}>
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <Typography variant="h6" gutterBottom component="div" sx={{ color: 'primary.main' }}>
                                Personal Details
                            </Typography>
                            <Box sx={{ mt: 2, mb: 3 }}>
                                <Typography variant='subtitle2' gutterBottom>
                                    Display Name
                                </Typography>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="displayName"
                                    label="Enter new display name"
                                    type="text"
                                    variant="outlined"
                                    value={newUserDetails.displayName}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mt: 2, mb: 3 }}>
                                <Typography variant='subtitle2' gutterBottom>
                                    Email Address
                                </Typography>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="email"
                                    label="Enter new email address"
                                    type="email"
                                    variant="outlined"
                                    value={newUserDetails.email}
                                    onChange={handleChange}
                                />
                            </Box>

                            <Typography variant="h6" gutterBottom component="div" sx={{ color: 'primary.main', mt: 4 }}>
                                Security
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='subtitle2' gutterBottom>
                                    Current Password
                                </Typography>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="currentPassword"
                                    label="Current password"
                                    type="password"
                                    variant="outlined"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='subtitle2' gutterBottom>
                                    New Password
                                </Typography>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="newPassword"
                                    label="New password"
                                    type="password"
                                    variant="outlined"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='subtitle2' gutterBottom>
                                    Confirm New Password
                                </Typography>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm new password"
                                    type="password"
                                    variant="outlined"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                />
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, padding: '10px 10px', fontSize: '1rem' }}
                            >
                                Update Account
                            </Button>
                            <Button
                                fullWidth
                                variant="ghost"
                                sx={{ mt: 1, padding: '10px 10px', fontSize: '1rem' }}
                                onClick={() => navigate('/')}
                            >
                                Back to Dashboard
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </>
    );
}

export default AccountPage;
