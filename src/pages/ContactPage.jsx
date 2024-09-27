import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
                We would love to hear from you! If you have any questions or feedback, please reach out to us.
            </p>

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
