import React from "react";

const Forms = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	const setStatusHandler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<div>
			<form>
				<input
					value={inputText}
					type="text"
					className="todo-input"
					onChange={(e) => setInputText(e.target.value)}
				/>
				<button
					className="todo-button"
					type="submit"
					onClick={submitTodoHandler}
				>
					+
				</button>
				<div className="select">
					<select
						onChange={setStatusHandler}
						name="todos"
						className="filter-todo"
					>
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Forms;
