
import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
background:linear-gradient(to right, rgba(0, 0, 0 , 0.7), rgba(0, 0, 0 , 0.1)), url(${ImgBg});
background-position:center;
background-size:cover;
height:100vh;
`;
 export const HeroContent = styled.div`
 height:calc(100vh -80px);
 padding:0rem calc((100vw - 1300px)/2);
 `;


export const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:100vh;
max-height:100%;
padding: 0 2rem;
width:650px;
color:#fff;
text-transform:uppercase;
line-height:1;
font-weight:bold;

@media screen and (max-width:650px){
    width:100%;
}
`;

export const HeroH1 = styled.h1`
box-shadow:3px 5px #e9ba23;
letter-spacing:3px;
margin-bottom:1rem;
font-size:clamp(2.5rem, 10vw, 5rem);
`;

export const HeroP = styled.p`
font-size:clamp(2rem, 2.5vw, 5rem);
margin-bottom:2rem;
`;

export const HeroBtn = styled.button`
font-size:1.4rem;
padding:1rem 4rem;
border:none;
background:#e31837;
color:#fff;
transition: 0.2s ease-out;

&:hover {
    background:#ffc500;
    transition: 0.2s ease-out;
    color:#000;
    cursor:pointer;
}
`;