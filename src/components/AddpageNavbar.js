// Navbar.jsx

import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
    <div className="brand">Recipe Finder</div>
		<ul class="navLinks">
			<li class="navItems"><Link to="/">Home</Link></li>
			<li class="navItems"><Link to="/Addpage">Add</Link></li>
      <li class="navItems"><Link to="/Loginpage">Login</Link></li>
		</ul>
    </nav>
  );
};

export default Navbar;
