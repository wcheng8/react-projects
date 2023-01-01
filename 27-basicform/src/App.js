import "./App.css";
import React, { useState } from "react";

function App() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleFirstNameInputChange = (e) => {
		setValues({ ...values, firstName: e.target.value });
	};

	const handleLastNameInputChange = (e) => {
		setValues({ ...values, lastName: e.target.value });
	};

	const handleEmailChange = (e) => {
		setValues({ ...values, email: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.firstName && values.lastName && values.email) {
			setValid(true);
			alert(
				`FirstName: ${values.firstName} LastName: ${values.lastName} Email: ${values.email}`
			);
		} else {
			setValid(false);
		}
		setSubmitted(true);
	};

	return (
		<div className="form-container">
			<form action="" className="register-form" onSubmit={handleSubmit}>
				<h1>Simple Form</h1>
				{submitted && valid ? (
					<div className="success-message">
						Success the form has been submited!
					</div>
				) : null}
				<input
					value={values.firstName}
					onChange={handleFirstNameInputChange}
					id="first-name"
					className="form-field"
					type="text"
					placeholder="First Name"
					name="firstName"
				/>
				{submitted && !values.firstName ? (
					<span className="error">Please enter a First name</span>
				) : null}
				<input
					onChange={handleLastNameInputChange}
					value={values.lastName}
					id="last-name"
					className="form-field"
					type="text"
					placeholder="Last Name"
					name="lastName"
				/>
				{submitted && !values.lastName ? (
					<span className="error">Please enter a Last name</span>
				) : null}
				<input
					onChange={handleEmailChange}
					value={values.email}
					id="email"
					className="form-field"
					type="text"
					placeholder="Email"
					name="email"
				/>
				{submitted && !values.email ? (
					<span className="error">Please enter an Email</span>
				) : null}
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
