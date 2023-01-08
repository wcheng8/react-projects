import "./App.css";
import React, { useState } from "react";
import { Input } from "./component/Input";
import { ClearButton } from "./component/ClearButton";
import { Button } from "./component/Button";
import * as math from "mathjs";

function App() {
	const [input, setInput] = useState("");
	const [isNumber, setisNumber] = useState(true);

	const addToInput = (value) => {
		if (Number(value)) {
			setisNumber(true);
		} else {
			setisNumber(false);
		}
		if (isNumber) {
			setInput(input + value);
		}
	};
	const handleEqual = () => {
		setInput(math.evaluate(input));
	};
	return (
		<div className="App">
			<div className="calc-wrapper">
				<Input input={input} />
				<div className="row">
					<Button handleClick={addToInput}>7</Button>
					<Button handleClick={addToInput}>8</Button>
					<Button handleClick={addToInput}>9</Button>
					<Button handleClick={addToInput}>/</Button>
				</div>
				<div className="row">
					<Button handleClick={addToInput}>4</Button>
					<Button handleClick={addToInput}>5</Button>
					<Button handleClick={addToInput}>6</Button>
					<Button handleClick={addToInput}>*</Button>
				</div>
				<div className="row">
					<Button handleClick={addToInput}>3</Button>
					<Button handleClick={addToInput}>2</Button>
					<Button handleClick={addToInput}>1</Button>
					<Button handleClick={addToInput}>+</Button>
				</div>
				<div className="row">
					<Button handleClick={addToInput}>.</Button>
					<Button handleClick={addToInput}>0</Button>
					<Button
						handleClick={() => {
							handleEqual();
						}}
					>
						=
					</Button>
					<Button handleClick={addToInput}>-</Button>
				</div>
				<div className="row">
					<ClearButton setInput={setInput}>Clear</ClearButton>
				</div>
			</div>
		</div>
	);
}

export default App;
