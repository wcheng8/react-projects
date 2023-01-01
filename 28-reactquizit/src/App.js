import "./App.css";
import questions_array from "./questions.json";
import { useState } from "react";

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerButtonClicked = (key) => {
		var correctAnswer = questions_array[currentQuestion].correctIndex;
		if (correctAnswer === key) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions_array.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const resetQuestions = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(false);
	};
	return (
		<div className="App">
			{showScore ? (
				<div className="score-section">
					You scored {score} out of {questions_array.length}
					<div className="scoreRetry">
						<button onClick={resetQuestions}>Retry</button>
					</div>
				</div>
			) : (
				<div>
					<div className="question-section">
						<div className="question-count">
							<span>Question {currentQuestion + 1}</span>/
							{questions_array.length}
						</div>
						<div className="question-text">
							{questions_array[currentQuestion].question}
						</div>
					</div>
					<div className="answer-section">
						{questions_array[currentQuestion].answers.map(
							(answersOptions, key) => (
								<button onClick={() => handleAnswerButtonClicked(key)}>
									{answersOptions.answerTxt}
								</button>
							)
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
