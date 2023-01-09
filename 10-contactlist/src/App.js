import "./App.css";
import { ContactCard } from "./ContactCard";
import React, { useState, useEffect } from "react";

function App() {
	const [contacts, setContacts] = useState("");
	useEffect(() => {
		fetch("https://randomuser.me/api/?results=10")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setContacts(data.results);
			});
	}, []);
	return (
		<div>
			{contacts.map((val, index) => {
				return (
					<ContactCard
						key={index}
						avatarUrl={val.picture.large}
						name={val.name.first}
						email={val.email}
						cell={val.cell}
					/>
				);
			})}
		</div>
	);
}

export default App;
