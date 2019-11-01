import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
    <div className='nav-container'>
      <Link to="/" className='nav-item'>Home</Link>
      <Link to="/portfolio" className='nav-item'>Portfolio</Link>
    </div>
  );
};

export default NavBar;
