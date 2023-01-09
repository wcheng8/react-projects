import React, { useState } from "react";

export const ContactCard = (props) => {
	const [showCell, setShowCell] = useState(false);

	return (
		<div className="contact-card">
			<img src={props.avatarUrl} alt="profile" />
			<div className="user-details">
				<p>Name: {props.name}</p>
				<p>Email: {props.email}</p>
				<button
					onClick={() => {
						setShowCell(!showCell);
					}}
				>
					Show Phone:
				</button>
				{showCell ? <p>Phone: {props.cell}</p> : null}
			</div>
		</div>
	);
};
