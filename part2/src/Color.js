import React from "react";
import { Link } from "react-router-dom";

function Color({color, hex, history}){
    if(!hex){
        history.push("/colors");
    }

    return (
        <div className="Color">
            <h1 style={{color: hex}}>This is {color}</h1>
            <p>
                <Link to="/colors">Go Back</Link>
            </p>
        </div>
    )
}

export default Color;