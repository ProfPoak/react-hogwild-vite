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
        <div className="ui card" aria-label="hog card" onClick={handleDetailClick}>
            <div className="image">
                <img src={hog.image} alt={"Photo of " + hog.name}/>
            </div>
            <div className="content">
                <h3 className="header">{hog.name}</h3>
                {showDetails && (
                    <div className="description">
                        <p>Specialty: {hog.specialty}</p>
                        <p>{hog.weight}</p>
                        <p>{hog.greased ? "Greased" : "Nongreased"}</p>
                        <p>{hog["highest medal achieved"]}</p>
                    </div>
                )}
            </div>
            <button className="ui button" onClick={handleHideClick}>Hide Me</button>
        </div>
    );
}

export default HogCard