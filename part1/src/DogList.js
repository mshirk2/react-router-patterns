import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }){
    return (
        <div>
            <h1>Here are the dogs you can meet:</h1>
            <ul>
                {dogs.map(d => (
                    <li key={d.name}>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>
                            {d.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default DogList;