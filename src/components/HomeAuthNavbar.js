
// Navbar.jsx

import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="brand">Recipe Finder</div>
      <ul className="navLinks">
        <li className="navItems"><Link to="/Addpage">Add Recipe</Link></li>
        <li className="navItems"><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
