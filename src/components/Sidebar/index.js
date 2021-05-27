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
import ReactTooltip from "react-tooltip";

export const Sidebar = ({ toggle, isOpen }) => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon data-tip="Close" />
        <ReactTooltip place="left" type="dark" effect="solid" />
      </Icon>
      <SidebarMenu onClick={toggle}>
        <SidebarLink to="/">
          <Home data-tip="Home" />
          <ReactTooltip place="left" type="dark" effect="solid" />
        </SidebarLink>
        <SidebarLink to="/products">
          <Products data-tip="Products" data-for="products" />
          <ReactTooltip place="left" id="products" type="dark" effect="solid" />
        </SidebarLink>
        <SidebarLink to="/cart" data-tip="Cart" data-for="cart">
          <Cart />
          <ProductQuantities>{totalQuantities}</ProductQuantities>
          <ReactTooltip place="left" id="cart" type="dark" effect="solid" />
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};
