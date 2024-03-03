import React, { useState } from "react";

import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuColors = {
    shop: "green",
    men: "blue",
    women: "green",
    kids: "blue",
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />

        <p> Rawknow </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link to="/"> Shop </Link>{" "}
          {menu === "Shop" ? (
            <hr style={{ backgroundColor: menuColors.shop }} />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          {" "}
          <Link to="/men"> Men </Link>{" "}
          {menu === "Men" ? (
            <hr style={{ backgroundColor: menuColors.men }} />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          {" "}
          <Link to="/women"> Women </Link>{" "}
          {menu === "Women" ? (
            <hr style={{ backgroundColor: menuColors.women }} />
          ) : (
            <></>
          )}{" "}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          {" "}
          <Link to="/kids"> Kids </Link>{" "}
          {menu === "Kids" ? (
            <hr style={{ backgroundColor: menuColors.kids }} />
          ) : (
            <></>
          )}{" "}
        </li>
      </ul>
      <div className="nav-logon-cart">
        <Link to="/login">
          <button> Login </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count"> 0 </div>
      </div>
    </div>
  );
};

export default Navbar;
