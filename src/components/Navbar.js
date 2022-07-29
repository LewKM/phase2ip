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
            <Link id="link" to="/charts">Charts</Link>
        </li>
        <li id="nav">
            <Link id="link" to="/contact">Contact</Link>
        </li>
        <li id="nav">
            <Link id="link" to="/charts">Blogs</Link>
        </li>
    </div>
  );
}

export default Navbar