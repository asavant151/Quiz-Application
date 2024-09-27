import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
                Welcome to QuizApp! We are dedicated to providing an engaging and interactive platform for users to test their knowledge on various subjects through quizzes.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Our mission is to make learning fun and accessible to everyone, encouraging users to challenge themselves and grow their knowledge base.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-gray-600">Founder & CEO</p>
                        <p className="mt-2">
                            John is passionate about education and technology, leading the vision of QuizApp.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-gray-600">Product Manager</p>
                        <p className="mt-2">
                            Jane oversees the product development and ensures a smooth user experience.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-xl font-semibold">Emily Johnson</h3>
                        <p className="text-gray-600">Lead Developer</p>
                        <p className="mt-2">
                            Emily is responsible for the technical aspects of the platform, bringing ideas to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
