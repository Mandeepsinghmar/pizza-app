import React from "react";
import { Link } from "react-router-dom";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroBtn,
  HeroP,
} from "./HeroElements";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest fast food Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <Link to="/products">
            <HeroBtn>Place Order</HeroBtn>
          </Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
