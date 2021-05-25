import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  Products,
  Cart,
  Home,
  ProductQuantities,
} from "./SidebarElements";
import { useSelector } from "react-redux";

export const Sidebar = ({ toggle, isOpen }) => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu onClick={toggle}>
        <SidebarLink to="/">
          <Home />
        </SidebarLink>
        <SidebarLink to="/products">
          <Products />
        </SidebarLink>
        <SidebarLink to="/cart">
          <Cart />
          <ProductQuantities>{totalQuantities}</ProductQuantities>
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};
