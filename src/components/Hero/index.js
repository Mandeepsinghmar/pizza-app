import React from 'react'
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroBtn, HeroP} from './HeroElements';

export const Hero = () => {
    return (
       <HeroContainer>
           <Navbar />
           <Sidebar />
            <HeroContent>  
               <HeroItems>
                   <HeroH1>Greatest Pizza Ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
               </HeroContent>  
       </HeroContainer>
    )
}
