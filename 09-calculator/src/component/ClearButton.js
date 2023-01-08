import React from "react";

export const ClearButton = (props) => {
	const handleClear = () => {
		props.setInput("");
	};
	return (
		<div className="clear-btn" onClick={handleClear}>
			{props.children}
		</div>
	);
};
