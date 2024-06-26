import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
    background: none;
    height: 80px;
    width: 100%;
    display: flex; /
    justify-content: center; 
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: inline-flex;
    justify-content: space-between; 
    align-items: center;
    position: relative;
    height: 80px;
    width: 100%; 
    padding: 0 24px; 
    max-width: 1440px; 
    margin: auto; 
`;


export const NavLogo = styled(NavLink)`
    justify-self: center;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: "Figtree", sans serif;
`



export const MobileIcon = styled.div`
    display: none;
    position: absolute;
    right: 0; 
    top: 50%;
    padding-right: 20px;
    transform: translateY(-50%);

    @media screen and (max-width: 768px){
        display: block;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    color: #00ff57X;
    align-items: center;
    list-style: none;
    text-align: center;
    

    @media screen and (max-width: 300px){
        display: none;
    }
`

export const NavItem = styled.li`
`
export const NavLinks = styled(NavLink)`
    color: #3abd81;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    margin: 0;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #4effae; 
    }

    &.active {
        color: #4effae; 
        font-weight: bold;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(NavLink)`
    color: #fff;
    border-radius: 5px;
    background: #40a677;
    white-space: no-wrap;
    padding: 8px 22px;
    font-size: 12px;
    outline: 1px solid #3ecf8e;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #32805c;
        color: #fff;
    }
`

export const Spacer = styled.div`
    padding-right: 25px;
`;

