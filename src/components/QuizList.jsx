import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from '../data/quizzes';

const QuizList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map(quiz => (
                <Link 
                    to={`/quiz/${quiz.id}`} 
                    key={quiz.id} 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{quiz.title}</h2>
                    <p className="text-gray-600">{quiz.description}</p>
                </Link>
            ))}
        </div>
    );
};

export default QuizList;
