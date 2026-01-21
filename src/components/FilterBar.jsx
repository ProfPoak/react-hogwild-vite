import React from "react";

function FilterBar({ showGreasedOnly, setShowGreasedOnly}) {
    function handleToggleGreased() {
        setShowGreasedOnly(!showGreasedOnly);
    };

    return (
        <div>
            <label htmlFor="greased-checker">Greased Pigs Only?</label>
            <input id="greased-checker" type="checkbox" checked={showGreasedOnly} onChange={handleToggleGreased} />
        </div>
    );
}

export default FilterBar