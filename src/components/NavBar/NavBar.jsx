import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header  className="App-header">
      <Link to="/" className='nav-item'>Home</Link>
      <Link to='/About' className='nav-item'>About</Link>
      <Link to="/Portfolio" className='nav-item'>Portfolio</Link>
    </header>
  );
};

export default NavBar;
