import React, {useState} from "react";
import Sidebar from "../Sidebar/sideBar";
import NavbarComponent from "../Navbar/navBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./heroElements";
//import Navbar from '../Navbar/navBar';

const Hero = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <HeroContainer>
      <NavbarComponent toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>For Complete Sweet Relief Come See Dee</HeroH1>
          <HeroP>Something about Dee</HeroP>
          <HeroBtn>Request Services</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
