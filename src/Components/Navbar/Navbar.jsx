import React from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import logo from "../Assets/HaiX_white.png";

import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <div>
      <i className="bi bi-bookmark"></i>
      <img className="logo" src={logo} alt="logo"></img>
      <BookmarkBorderIcon />
      <ul className="list">Favourite Dashboard</ul>
    </div>
  );
};

export default Navbar;
