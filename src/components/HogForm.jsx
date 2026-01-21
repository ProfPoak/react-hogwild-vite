import React from "react";
import { useState } from "react";

function HogForm({ onAddHog }) {
    const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: ""
  });

    function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
    });
    };

    function handleSubmit(e) {
    e.preventDefault();
    onAddHog(formData);

    setFormData({
        name: "",
        specialty: "",
        weight: "",
        greased: false,
        "highest medal achieved": "",
        image: ""
    });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name:</label>
                <input 
                    id="name-input" 
                    name="name" 
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="specialty-input">Specialty:</label>
                <input 
                    id="specialty-input" 
                    name="specialty" 
                    type="text" 
                    value={formData.specialty}
                    onChange={handleChange}
                />
                <label htmlFor="weight-input">Weight:</label>
                <input 
                    id="weight-input" 
                    name="weight" 
                    type="number" 
                    value={formData.weight}
                    onChange={handleChange}
                />
                <label htmlFor="greased-input">Greased?</label>
                <input 
                    id="greased-input" 
                    name="greased" 
                    type="checkbox" 
                    checked={formData.greased}
                    onChange={handleChange}
                />
                <label htmlFor="medal-input">Highest medal achieved:</label>
                <input 
                    id="medal-input" 
                    name="highest medal achieved" 
                    type="text"
                    value={formData["highest medal achieved"]}
                    onChange={handleChange}
                />
                <label htmlFor="image-input">Image URL:</label>
                <input 
                    id="image-input" 
                    name="image" 
                    type="text"
                    value={formData.image}
                    onChange={handleChange}
                />
                <button type="submit">Add Hog</button>
            </form>
        </div>
    );
}

export default HogForm