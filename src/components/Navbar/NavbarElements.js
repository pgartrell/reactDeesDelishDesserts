import styled from 'styled-components';
import {NavLink as Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav `
    background: transparent;
    height: 80px;
    padding-right: 3px;
    justify-content: right;
    font-weight: 700;
    display: flex;
`;

export const NavLink = styled(Link) `
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: right;
    text-decoration: none;
    cursor: pointer;
    margin: 0px 10px;
    &.active{
        color: #000000;
    }

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: right;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  

