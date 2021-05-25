import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Cart,
  Products,
  Home,
  ProductQuantities,
} from "./NavbarElements";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavLink to="/">
        Subway<span style={{ fontSize: "1.4rem" }}>🍕</span>
      </NavLink>
      <NavIcon>
        <Link to="/">
          {" "}
          <Home />
        </Link>
        <Link to="/products">
          {" "}
          <Products />
        </Link>
        <Link to="/cart">
          {" "}
          <Cart />
          <ProductQuantities>{totalQuantities}</ProductQuantities>
        </Link>

        <Bars onClick={toggle} />
      </NavIcon>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        style={{ fontWeight: "400 !important" }}
      />
    </Nav>
  );
};
