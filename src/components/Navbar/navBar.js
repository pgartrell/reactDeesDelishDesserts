import React from "react";
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'

const NavbarComponent = ({toggle}) => {
  return (
      <React.Fragment>
        <Nav>
          <NavLink to="/">Dees Deslish Desserts</NavLink>
          <NavIcon onClick={toggle}>            
            <Bars />
          </NavIcon>
        </Nav>
      </React.Fragment>
  );
};

export default NavbarComponent;
