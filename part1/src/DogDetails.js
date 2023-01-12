import React from 'react';
import { Link, Redirect, useParams } from "react-router-dom"

function DogDetails({ dogs }){
    const {name} = useParams();
    const selectedDog = dogs.find(d => 
        d.name.toLowerCase() === name.toLowerCase());
        
    if(selectedDog){
        return (
            <div className='DogDetails'>
            <h1>Hi, my name is {selectedDog.name}</h1>
            <img src={selectedDog.src} alt={selectedDog.name}></img>
            <p>{selectedDog.age} years old</p>
            <ul>
                {selectedDog.facts.map(f => (
                    <li key={f}>{f}</li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
        );
    } else {
        return <Redirect to="/dogs"/>
    }
}

export default DogDetails;