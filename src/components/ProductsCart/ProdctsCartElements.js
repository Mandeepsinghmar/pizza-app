import styled from "styled-components";

export const Cart = styled.div`
  padding: 40px;
  background: #150f0f;
  color: #fff;
  min-height: 75vh;
`;
export const CartContainer = styled.div``;
export const CartTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
export const CartRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const CartRowContainer = styled.div`
  width: 75%;
  @media screen and (max-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
`;
export const CartHeading = styled.div`
  display: flex;
  padding: 10px;
  //   width: 100%;
  flex-wrap: wrap;
  background: #000;
  font-size: 1rem;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 50px;
    background: none;
    display: none;
  }
`;
export const CartHeadingTitle = styled.div`
  width: 16.33333333333333%;
  @media screen and (max-width: 750px) {
    justify-content: center;
    width: 100px;
    align-items: center;
    padding: 10px 20px;
  }
`;
export const CartItemsConatiner = styled.div`
  display: flex;
    padding: 2px;
    width: 100%;

  align-items: center;
//   justify-content: censter;
background:#e31837 !important;
  margin-top: 10px;
//   border:2px solid #ffc500;

  @media screen and (max-width: 550px) {
 
      flex-wrap: wrap;

    
`;

export const CartItemsDesc = styled.div`
  display: flex;
  font-size: 0.9rem;
  width: 16.33333333333333%;
  

  @media screen and (max-width: 750px) {
      font-size:1rem
    justify-content: center;
    width: 100px;
    
    align-items: center;
    padding: 2px;

    
  }
`;
export const CartProductImgContainer = styled.div``;
export const QuantityContainer = styled.div`
  display: flex;

  cursor: pointer;
`;
export const Quantity = styled.span`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffc500;
`;

export const SummaryContainer = styled.div`
  margin: 0 auto;
  //   width: 100%;

  @media screen and (max-width: 935px) {
    width: 300px;
    margin-top: 40px;
  }
`;
export const Summary = styled.div``;
export const SummaryHeading = styled.div`
  background: black;
  padding: 10px;
  text-align: center;
  //   width: 100px;
`;
export const SummaryDetailsContainer = styled.div`
  //   border: 4px solid #ffc500;
  //   padding: 15px;
  background: #ffc500;
  color: #000;
  //   margin-top: 10px;
`;
export const SummaryDetails = styled.div`
  display: flex;

  border-radius: 2px;
`;
// export const SummaryDescContainer = styled.div
export const SummaryDesc = styled.div`
  padding: 10px;
`;
export const CheckoutCart = styled.button`
  font-size: 1.1rem;
  padding: 1rem 2rem;
  margin: 10px;

  font-weight: 800px;
  border: none;
  background: #e31837;
  width: 90%;
  color: #fff;
  transition: 0.2 ease-out;
  text-transform: uppercase;

  &:hover {
    background: #000;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 1.5rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem 1.5rem;
  }
`;
export const AddProductsButton = styled.button`
  width: 350px !important;

  font-size: 1.1rem !important;
  padding: 1rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2 ease-out;
  margin: 20px auto 0px auto;
  cursor: pointer;

  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    color: #fff;
  }
  @media screen and (max-width: 700px) {
    width: 250px !important;
    padding: 1rem;
  }
`;
