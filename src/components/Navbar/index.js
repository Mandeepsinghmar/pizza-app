import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

 export const Navbar = () => {
    return (
       <Router>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon>
                <p>Menu</p>
                <Bars />
                </NavIcon>
            </Nav>
      </Router>
    )
}
