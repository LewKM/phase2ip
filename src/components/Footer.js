import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div id="footer">
        <div id="footer-column">
        <h3 id="link">Location</h3>
        <p id="link">123 Sesame Street</p>
        </div>
        <div id="footer-column">
        <h3 id="link">Hours</h3>
        <p id="link">Mon-Fri 9am-5pm</p>
        </div>
        <div id="footer-column">
        <h3 id="link">Contact</h3>
        <p id="link">555-555-1234</p>
        </div>
        <div id="footer-column">
        <h3 id="link">Social</h3>
        <p id="link">@company</p>
        </div>
    </div>
  )
}

export default Footer;

