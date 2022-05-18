import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
    return (
        <div className="intro-background">
        <div className="intro-container">
            <h1 className="intro-name">Emilio Marin</h1>
            <p className="intro-description">I study <mark><Link className='links' to='/about'>Computer Science</Link></mark> at the University of Houston &</p>
            <p className="intro-description">currently <mark>work</mark> as a Part-Time <mark>Systems Administrator</mark></p>
        </div>
        </div>
    );
};

export default Home;