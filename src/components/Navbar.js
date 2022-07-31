import React from 'react'
import {Link} from "react-router-dom";
import "../components/Navbar.css";
import "../index.css"

const Navbar = () => {
  return (
    <div id="navbar">
        <li id="nav">
            <Link id="link" to="/">Home</Link>
        </li>
        <li id="nav">
            <Link id="link" to="/add">Brain-Storming Zone</Link>
        </li>
        <li id="nav">
            <Link id="link" to="/chart">Charts</Link>
        </li>
        <li id="nav">
            <Link id="link" to="/contact">About-Us</Link>
        </li>
        <li id="nav">
            <Link id="link" to="/blog">Blog-Section</Link>
        </li>
    </div>
  );
}

export default Navbar