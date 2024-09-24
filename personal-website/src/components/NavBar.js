import React from "react";
import { NavLink } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/about">
        About Me
      </NavLink>
      <NavLink className="link" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}
