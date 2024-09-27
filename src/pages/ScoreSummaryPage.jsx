import React from 'react';
import { useLocation } from 'react-router-dom';
import calculateScore from '../utils/calculateScore';

const ScoreSummaryPage = () => {
    const location = useLocation();
    const { quiz, answers } = location.state;
    const score = calculateScore(quiz, answers);

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                    Quiz Summary
                </h1>
                <p className="text-xl text-gray-700 mb-6 text-center">
                    You scored <span className="text-blue-500 font-semibold">{score}</span> out of{' '}
                    <span className="text-blue-500 font-semibold">{quiz.questions.length}</span>
                </p>

                <div className="space-y-8">
                    {quiz.questions.map((question, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {index + 1}. {question.text}
                            </h2>
                            <div className="mt-2 text-sm">
                                <p className="text-gray-600">
                                    <span className="font-medium text-blue-500">Your answer:</span> {answers[question.id]}
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium text-green-500">Correct answer:</span> {question.correctAnswer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-all"
                    >
                        Try Another Quiz
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ScoreSummaryPage;
