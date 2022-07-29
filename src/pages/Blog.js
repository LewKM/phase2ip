// import React from "react";
// import "../css/Blog.css";

// function Blogs() {

//   return (
//     <div id="createchart">
//       <div id ="qoutes">
//       <h1>SHARE YOUR CHART</h1>
//       <h2>In the form on your Right</h2>   
//         <p>"The best way to make money in Forex is to trade with the trend."</p>

//         <p>"The key to successful Forex trading is to always trade with the trend."</p>""

//         <p>"The best way to make money in Forex is to always trade with the trend."</p>

//         <p>If you don't know which way the market is going, then you shouldn't be trading."</p>""

//         <p>"The best way to make money in Forex is to trade with a system." </p>

//         <p>"The best way to make money in Forex is to have a plan."</p>""

//         <p>"The best way to make money in Forex is to trade with discipline."</p>

//         <p>"The best way to make money in Forex is to trade with a system and a plan."</p>""
//       </div>
//     </div>
// );}

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1>My Blog</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Blog;

