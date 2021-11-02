import React from "react";
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const NavbarComponent = ({toggle}) => {
  return (
      <React.Fragment>
        <Nav>
          <Bars />          
          <NavMenu>            
            <NavLink to='/About' activeStyle>
              About
            </NavLink>
            <NavLink to='/Gallery' activeStyle>
              Gallery
            </NavLink>
            <NavLink to='/Events' activeStyle>
              Events
            </NavLink>
            <NavLink to='/Contactme' activeStyle>
              Contact Me
            </NavLink>           
          </NavMenu>
      </Nav>
      </React.Fragment>
  );
};

export default NavbarComponent;
