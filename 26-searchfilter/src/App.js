import "./App.css";
import jsonData from "./mck_data.json";
import { useState } from "react";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className="App">
			<h1>Are you in the List?</h1>
			<input
				type="text"
				className="input"
				placeholder="Search..."
				onChange={(event) => {
					setSearchTerm(event.target.value);
				}}
			/>
			<h2>Guest List:</h2>
			<div className="container">
				{jsonData
					.filter((val) => {
						if (searchTerm == "") {
							return val;
						} else if (
							val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return val;
						}
					})
					.map((val, key) => {
						return (
							<div className="user" key={key}>
								<p>{val.first_name}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default App;
