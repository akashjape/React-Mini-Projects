import { useState } from "react";
import { questions } from "./data";

const Main = ({ score, setScore }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const [quizCompleted, setQuizCompleted] = useState(false);

  // Handle radio button selection
  const handleOptionChange = (questionIndex, option) => {
    if (!submitted[questionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: option,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (questionIndex) => {
    if (!selectedAnswers[questionIndex]) {
      alert("Please select an option before submitting!");
      return;
    }

    setSubmitted((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));

    if (selectedAnswers[questionIndex].isCorrect) {
      setScore((prevScore) => prevScore + 5);
    }

    // Check if quiz is completed
    if (Object.keys(submitted).length + 1 === questions.length) {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="main-content">
      {questions.map((item, index) => (
        <div key={index} className="card quiz-card">
          <div className="card-body">
            <h5 className="card-title question-body">
              <span>Question {index + 1}: </span> {item.question}
            </h5>

            <ul className="card-text option-list">
              {item.options.map((option, i) => (
                <li key={i} className="option-item">
                  <input
                    type="radio"
                    name={`option-${index}`}
                    id={`option-${index}-${i}`}
                    disabled={submitted[index]} // Disable after submission
                    onChange={() => handleOptionChange(index, option)}
                  />
                  <label
                    htmlFor={`option-${index}-${i}`}
                    className={
                      submitted[index]
                        ? option.isCorrect
                          ? "correct-answer"
                          : selectedAnswers[index] === option
                          ? "wrong-answer"
                          : ""
                        : ""
                    }
                  >
                    {String.fromCharCode(65 + i)}. {option.value}
                  </label>
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary"
              onClick={() => handleSubmit(index)}
              disabled={submitted[index]} // Disable after submission
            >
              Submit
            </button>
          </div>
        </div>
      ))}

      {quizCompleted && (
        <div className="quiz-complete">
          <h2>🎉 Quiz Completed! Final Score: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default Main;
