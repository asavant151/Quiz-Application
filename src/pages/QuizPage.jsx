import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizzes from "../data/quizzes";
import Question from "../components/Question";

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const quizData = quizzes.find((q) => q.id === parseInt(id));
    setQuiz(quizData);
  }, [id]);

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/summary", { state: { quiz, answers } });
    }
  };

  if (!quiz)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="bg-[url('/assets/images/quiz-bg.png')] bg-center bg-no-repeat bg-cover h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 mt-40">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            {quiz.title}
          </h1>

          {/* Display current question */}
          <Question
            question={quiz.questions[currentQuestion]}
            onAnswer={handleAnswer}
            selectedAnswer={answers[quiz.questions[currentQuestion].id]}
          />

          <div className="flex justify-between mt-6">
            <button
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              {currentQuestion < quiz.questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
