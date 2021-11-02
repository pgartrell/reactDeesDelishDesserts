import React, {useState} from "react";
import Logo from "../Logo/logo"
import NavbarComponent from "../Navbar/navBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./heroElements";


const Hero = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
      <HeroContainer>
        <div>
          <div className="col">
            <Logo  />             
          </div> 
          <div className ="col">
            <NavbarComponent toggle={toggle} />
          </div>
        </div>
        <div>   
          <HeroContent>
            <HeroItems>
              <HeroH1>Dees Delish Desserts</HeroH1>
              <HeroP>For Complete Sweet Relief Come See Dee</HeroP>
              <HeroBtn>Make an Order</HeroBtn>
            </HeroItems>
          </HeroContent>       
        </div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
