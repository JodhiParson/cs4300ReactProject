// Navbar.jsx

import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
    <div className="brand">Recipe Finder</div>
		<ul class="navLinks">
			<li class="navItems"><Link to="/HomeAuth">Home</Link></li>
			<li class="navItems"><Link to="/Addpage">Add</Link></li>
      <li className="navItems"><Link to="/">Logout</Link></li>
		</ul>
    </nav>
  );
};

export default Navbar;
