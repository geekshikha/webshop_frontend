import React from "react";
import "./styles.css";
import { AiOutlineHeart } from "react-icons/ai";

import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar";

const NavBar = () => {
  return (
    <div className="NavBar Container ">
      <div className="NavBar-Left ">
        <h1>
          The <strong>Shop</strong>
        </h1>
        <div>
          <NavLink
            className="navItem"
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home
          </NavLink>

          <NavLink
            className="navItem"
            to="/details/:id"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Products
          </NavLink>

          <NavLink
            className="navItem"
            to="/blog"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Blog
          </NavLink>

          <NavLink
            className="navItem"
            to="/shop"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Shop
          </NavLink>

          <NavLink
            className="navItem"
            to="/contact"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="NavBar-Search "></div>
        <SearchBar />
      </div>
      <div className="NavBar-Icons">
        <ul>
          <li>
            <AiOutlineUser />
            <BsCart />
            <AiOutlineHeart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
