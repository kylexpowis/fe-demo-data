import React from 'react';
import { Modal, Fade, Box, Button, Typography, Card, CardContent, TextField } from '@mui/material';
import { useModalContext } from '../context/ModalContext';

function ProfileModal({ user }) {
    const [email, setEmail] = React.useState(user?.email || '');
    const [password, setPassword] = React.useState('');
    const [displayName, setDisplayName] = React.useState(user?.displayName || 'User');

    const { isModalOpen, closeModal } = useModalContext();

    const handleUpdateProfile = () => {
        console.log("Profile updated with email:", email, "and new password (if changed).");
        closeModal(); 
    };

    return (
        <div>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
            >
                <Fade in={isModalOpen}> 
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Card>
                            <CardContent>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    Profile
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    Display Name: {displayName}
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="New Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    margin="normal"
                                    helperText="Leave blank to keep the current password."
                                />
                                <Button
                                    sx={{ mt: 2 }}
                                    variant="contained"
                                    onClick={handleUpdateProfile}>
                                    Update Profile
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ProfileModal;