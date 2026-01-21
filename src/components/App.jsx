import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";
import HogList from "./HogList";
import hogsData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogsData)
	const [hiddenHogs, setHiddenHogs] = useState([])
	const [showGreasedOnly, setShowGreasedOnly] = useState (false)
	const [sortBy, setSortBy] = useState("") 

	let processedHogs = hogs
		.filter(hog => !hiddenHogs.includes(hog.name))

		.filter(hog => !showGreasedOnly || hog.greased);

	if (sortBy === "name") {
		processedHogs = [...processedHogs].sort((a, b) =>
			a.name.localeCompare(b.name)
		);
	} else if (sortBy === "weight") {
		processedHogs = [...processedHogs].sort((a, b) =>
			a.weight - b.weight
		);
	}

	function handleHideHog(hogName) {
		setHiddenHogs([...hiddenHogs, hogName]);
	}
	
	function handleAddHog(formData) {
		setHogs([...hogs, formData])
	}

	return (
		<div className="App">
			<Nav />
			<FilterBar showGreasedOnly={showGreasedOnly} setShowGreasedOnly={setShowGreasedOnly} sortBy={sortBy} setSortBy={setSortBy}/>
			<HogForm onAddHog={handleAddHog}/>
			<HogList hogs={processedHogs} onHideHog={handleHideHog}/>
		</div>
	);
}

export default App;
