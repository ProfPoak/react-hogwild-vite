import React from "react";
import { useState } from "react";

function HogCard({ hog, onHideHog }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleDetailClick() {
        setShowDetails(!showDetails);
    }

    function handleHideClick(e) {
        e.stopPropagation();
        onHideHog(hog.name);
    }

    return (
        <div onClick={handleDetailClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={"Photo of " + hog.name}/>
            {showDetails && (
                <div>
                    <p>Specialty: {hog.specialty}</p>
                    <p>{hog.weight}</p>
                    <p>{hog.greased ? "Greased" : "Nongreased"}</p>
                    <p>{hog["highest medal achieved"]}</p>
                </div>
            )}
            <button onClick={handleHideClick}>Hide Me</button>
        </div>
    );
}

export default HogCard