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
} from "./SidebarElements";

export const Sidebar = ({ toggle, isOpen }) => {
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
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};
