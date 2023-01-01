import React, { useState } from "react";

const App = () => {
	const [tempretureValue, setTempretureValue] = useState(10);
	const [tempretureColor, setTempretureColor] = useState("color");

	const increaseTempreture = () => {
		setTempretureValue(tempretureValue + 1);
		tempretureValue >= 15
			? setTempretureColor("hot")
			: setTempretureColor("neutral");
		if (tempretureValue < 9) {
			setTempretureColor("cold");
		}
		if (tempretureValue >= 30) {
			setTempretureValue(30);
			alert("It's over 9000!");
		}
	};
	const decreaseTempreture = () => {
		setTempretureValue(tempretureValue - 1);
		tempretureValue <= 10
			? setTempretureColor("cold")
			: setTempretureColor("neutral");
		if (tempretureValue > 16) {
			setTempretureColor("hot");
		}
		if (tempretureValue <= -10) {
			setTempretureValue(-10);
			alert("Can't get any colder!!");
		}
	};

	return (
		<div className="app-container">
			<div className="tempreture-display-container">
				<div className={`tempreture-display ${tempretureColor}`}>
					{tempretureValue}°C
				</div>
			</div>
			<div className="button-container">
				<button onClick={increaseTempreture}>+</button>
				<button onClick={decreaseTempreture}>-</button>
			</div>
		</div>
	);
};

export default App;
