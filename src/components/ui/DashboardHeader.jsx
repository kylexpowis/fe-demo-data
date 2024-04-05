import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserTie } from "react-icons/fa";
import { Button } from './button';
import { NavBarContainer, NavLogo } from '../routes/landing/NavBarElements';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
    const navigate = useNavigate();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Sign out error:', error.message);
        } else {
            console.log('Successfully signed out');
            navigate('/');
        }
    }

    return (
        <NavBarContainer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }} className="shadow-lg bg-primary-transparent">
            <NavLogo to='/dashboard'><h1 className='FigTree text-h1'>Pair<span className='gradient-text'>Sniper</span></h1></NavLogo>
            <div className="flex-end">
                <Input className="bg-primary outline-popover font-semibold" placeholder="Search..."/>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full background-none"><FaUserTie className="w-7 h-auto" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="font-semibold">
                        <DropdownMenuItem>Account Information</DropdownMenuItem>
                        <Separator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <Separator />
                        <DropdownMenuItem>Preferences</DropdownMenuItem>
                        <Separator />
                        <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
            </div>
        </NavBarContainer>
    );
};

export default DashboardHeader;
