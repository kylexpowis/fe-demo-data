/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavBarContainer, NavItem, NavLinks, NavLogo, NavMenu, ModeToggleContainer, NavBtn, NavBtnLink, Spacer } from "./NavBarElements";

function Navbar() {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavLogo to='/'><h1 className='FigTree'>Pair<span className='gradient-text'>Sniper</span></h1></NavLogo>
                    <NavMenu>
                        <NavItem>
                        </NavItem>
                            <NavBtn>
                                <NavBtnLink to='/login'>Log In</NavBtnLink>
                            </NavBtn>
                            <Spacer />
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
