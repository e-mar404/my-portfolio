import React, { useState, useEffect } from "react";
import './Trail.css';

const Trail = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();

    useEffect(
        () => {
            const update = (e) =>{
                setX(e.x)
                setY(e.y)
            }

            window.addEventListener('mousemove', update)

            return () =>{
                window.removeEventListener('mousemove', update)
            }
        }, 
        [setX, setY]
    )
    
    return(
        <>
            <div className="Trail" style={{ top: y, left: x}}/>
            <h1 className="Text">Move the cursor around the screen</h1>
        </>
    );
}

export default Trail;