import React from "react";
import logo from "../resources/logo.gif";
import "./main.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <div className="container">
        <NavLink exact to="/" activeClassName="active-link">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
  );
}

export default Header;
