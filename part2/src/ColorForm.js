import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function ColorForm({addColor}){
    const INITIAL_STATE = {
        name: "",
        hex: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
   
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({[formData.name]: formData.hex});
        history.push("/colors");
    };

    return (
        <div className='ColorForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter Color Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Hex</label>
                    <input
                        id="hex"
                        type="color"
                        name="hex"
                        value={formData.hex}
                        onChange={handleChange}
                    />
                </div>
                <button>Add Color</button>
            </form>
            <div>
                <Link to={"/colors"}>Go Back</Link>
            </div>
        </div>
    );
}

export default ColorForm;