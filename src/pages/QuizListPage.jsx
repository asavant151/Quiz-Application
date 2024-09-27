import React from 'react';
import QuizList from '../components/QuizList';

const QuizListPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                        Choose Your Quiz
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Test your knowledge on various topics by selecting a quiz below. Good luck!
                    </p>
                </div>

                <div className="mt-12">
                    <QuizList />
                </div>
            </div>
        </div>
    );
};

export default QuizListPage;
