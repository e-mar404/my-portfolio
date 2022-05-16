import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  /*
  NavBtn,
  NavBtnLink,
  */
} from './NavbarElements.js';
  
const NavBar = () => {
  return (
    <Nav>
      <Bars />
      <NavMenu>
          <NavLink to='/my-portfolio'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
      </NavMenu>
    </Nav>
  );
};
  
export default NavBar;