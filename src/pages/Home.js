import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
    return (
        <div className="intro-background">
        <div className="intro-container">
            <h1 className="intro-name">Emilio Marin</h1>
            <p className="intro-description">I study <mark><Link className='links' to='/compsci'> Computer Science</Link></mark> at the University of Houston & currently <mark><Link className='links' to ='/related-work'>work</Link></mark> as a Part-Time <mark><Link className='links' to ='/related-work'> Systems Administrator </Link></mark></p>
            {/* <p className="intro-description">currently <mark><Link className='links' to ='/related-work'>work</Link></mark> as a Part-Time <mark><Link className='links' to ='/related-work'> Systems Administrator </Link></mark></p> */}
        </div>
        </div>
    );
};

export default Home;