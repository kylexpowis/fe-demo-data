import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ModeToggleContainer } from '../landing/NavBarElements';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { supabase } from '@/lib/supabaseClient';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            setError(error.message);
        } else {
            console.log('Login Success:', data);
            navigate('/dashboard');
        }

        setLoading(false);
    };


    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-white-transparent dark:bg-popover shadow z-50 h-auto p-3">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-end items-center pt-6">
                        <ModeToggleContainer>
                            <ModeToggle />
                        </ModeToggleContainer>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen bg-background">
                <Card className="flex justify-center items-center p-12 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4 w-80">
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <div className="text-red-500">{error}</div>}
                        </CardContent>
                        <CardFooter className="flex justify-center m-0 p-0">
                            <Button type="submit" variant="supabase" className="w-40 align-middle" disabled={loading}>
                                {loading ? 'Loading...' : 'Log In'}
                            </Button>
                        </CardFooter>
                        <CardDescription className="flex justify-center">
                            <Button variant="ghost">Forgot password?</Button>
                        </CardDescription>
                    </form>
                </Card>
            </div>
        </>
    );
}


export default LogIn;
