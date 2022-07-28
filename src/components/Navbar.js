import React from 'react'
import {Link} from "react-router-dom";
import "../components/Navbar.css";
import "../index.css"

const Navbar = () => {
  return (
    <div id="navbar">
        <li id="list">
            <Link id="link" to="/">Home</Link>
        </li>
        <li id="list">
            <Link id="link" to="/charts">Charts</Link>
        </li>
        <li id="list">
            <Link id="link" to="/add">Add Charts</Link>
        </li>
        <li id="list">
            <Link id="link" to="/contact">Contact</Link>
        </li>
    </div>
  );
}

export default Navbar