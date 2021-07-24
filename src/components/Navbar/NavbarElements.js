import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillShopping, AiFillHome, AiFillGoogleSquare } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { BiStore } from "react-icons/bi";

export const Nav = styled.nav`
  background: #ffc500;
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  font-weight: 700;

  position: sticky;
  top: 0px;
  z-index: 10000;

  @media screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`;

export const NavLink = styled(Link)`
  color: #e31837;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
export const LogoutButton = styled.button`
  width: 250px !important;

  font-size: 1.1rem !important;
  padding: 1rem 2rem;
  border: none;
  background: #000;
  color: #fff;
  transition: 0.2 ease-out;
  // margin: 40px auto 80px auto;
  cursor: pointer;
  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: #fff;
  padding-top: 5px;
`;

export const Bars = styled(MdRestaurantMenu)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #e31837 !important;
  }

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const Cart = styled(AiFillShopping)`
  font-size: 2rem;
  color: #000;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Products = styled(BiStore)`
  font-size: 2rem;
  color: #000;
  position: relative;
  &:hover {
    color: #e31837 !important;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const ProductQuantities = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 26px;
  right: 150px;
  width: 15px;
  height: 15px;

  border-radius: 50%;

  font-size: 17px;
  color: #e31837;

  &:hover {
    color: silver !important;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    right: 60px;
    top: 21px;
  }
`;
export const Home = styled(AiFillHome)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #e31837 !important;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const LoginWithGoogle = styled(AiFillGoogleSquare)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #e31837 !important;
  }

  @media screen and (max-width: 500px) {
    // display: none;
  }
`;
export const GoogleLogo = styled(FcGoogle)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #e31837 !important;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
