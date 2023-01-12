import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({colors}){
    const colorLinks = Object.keys(colors).map(color =>(
        <li key={color}>
            <Link to={`/colors/${color.toLowerCase()}`}>
                {color}
            </Link>
        </li>
    ));
    
    return (
        <div className='ColorList'>
            <h1>BEHOLD MY COLORS:</h1>
            <div>
                <ul>
                    {colorLinks}
                </ul>
            </div>
            <div>
                <Link to={'/colors/new'}>Add Color</Link>
            </div>
        </div>
    )
}

export default ColorList;