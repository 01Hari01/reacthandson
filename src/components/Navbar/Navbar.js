import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import Sidebar from "./SideNavbar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Logo</NavLogo>
                    <MobileIcon onClick={toggleSidebar}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </>
    );
}
export default Navbar;