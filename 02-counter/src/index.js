import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	increment2 = () => {
		this.setState({ count: this.state.count + 2 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	decrement2 = () => {
		this.setState({ count: this.state.count - 2 });
	};

	reset = () => {
		this.setState({ count: 0 });
	};
	render() {
		return (
			<div>
				<h1 className="title">React Counter</h1>
				<div className="btn_container">
					<button className="button" onClick={this.increment2}>
						++
					</button>
					<button className="button" onClick={this.increment}>
						+
					</button>
					<button className="button" onClick={this.decrement}>
						-
					</button>
					<button className="button" onClick={this.decrement2}>
						--
					</button>
				</div>
				<div className="counter">
					<button className="button reset" onClick={this.reset}>
						Reset
					</button>
					<h2>{this.state.count}</h2>
				</div>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
