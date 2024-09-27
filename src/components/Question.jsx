import React from 'react';

const Question = ({ question, onAnswer, selectedAnswer }) => {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">{question.text}</h2>
            <div className="grid gap-4">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(question.id, option)}
                        className={`w-full text-left p-4 border rounded-lg hover:shadow-md transition-all duration-200 ${
                            selectedAnswer === option 
                                ? 'bg-blue-500 text-white border-blue-500' 
                                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100'
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
