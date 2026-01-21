import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogs)
	const [hiddenHogs, setHiddenHogs] = useState([])
	const [showGreasedOnly, setShowGreasedOnly] = useState (False)
	const [sortBy, setSortBy] = useState("") 

	return (
		<div className="App">
			<Nav />
			<FilterBar />
			<HogForm />
			<HogList />
		</div>
	);
}

export default App;
