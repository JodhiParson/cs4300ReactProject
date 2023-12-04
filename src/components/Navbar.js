// Navbar.jsx

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("auth-token"));
  }, []);

  if (!token) {
    return (
      <nav>
        <div className="brand">Recipe Finder</div>
		    <ul className="navLinks">
		    <li className="navItems"><Link to="/">Home</Link></li>
        <li className="navItems"><Link to="/LoginPage">Login</Link></li>
		</ul>
    </nav>
    )
  }
  return( [
    <nav>
      <div className="brand">Recipe Finder</div>
		  <ul className="navLinks">
		  <li className="navItems"><Link to="/">Home</Link></li>
      <li className="navItems"><Link to="/">Logout</Link></li>
		</ul>
    </nav>
  ])
}

export default Navbar;
