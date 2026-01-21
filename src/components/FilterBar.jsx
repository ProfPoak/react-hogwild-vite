import React from "react";

function FilterBar({ showGreasedOnly, setShowGreasedOnly, sortBy, setSortBy}) {
    function handleToggleGreased() {
        setShowGreasedOnly(!showGreasedOnly);
    };

    function handleFilterSelect(e) {
        setSortBy(e.target.value)
    }

    return (
        <div>
            <label htmlFor="greased-checker">Greased Pigs Only?</label>
            <input id="greased-checker" type="checkbox" checked={showGreasedOnly} onChange={handleToggleGreased} />
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" value={sortBy} onChange={handleFilterSelect}>
                <option value="">No Sort</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    );
}

export default FilterBar