const quizTitles = [
    'JavaScript Basics', 'React Fundamentals', 'CSS Grid and Flexbox',
    'HTML5 Overview', 'Node.js Concepts', 'Async JavaScript', 
    'Functional Programming', 'ES6 Features', 'TypeScript Essentials',
    'Webpack Basics', 'REST APIs', 'GraphQL Queries', 
    'Vue.js Basics', 'Angular Essentials', 'Responsive Design Principles'
];

const quizDescriptions = [
    'Test your knowledge of JavaScript fundamentals.',
    'Learn the basics of React and state management.',
    'Test your skills in Grid and Flexbox layouts.',
    'Evaluate your understanding of HTML5 semantics and features.',
    'Explore core Node.js concepts and asynchronous programming.',
    'Master async/await and promises in JavaScript.',
    'Understand functional programming principles in JavaScript.',
    'Learn new features of ES6 like arrow functions, destructuring.',
    'Get started with static type checking using TypeScript.',
    'Understand the basics of bundling and module systems in Webpack.',
    'Test your understanding of building RESTful APIs.',
    'Learn about GraphQL queries and resolvers.',
    'Get started with Vue.js and its component-based architecture.',
    'Learn the fundamentals of Angular for building single-page apps.',
    'Test your skills in creating responsive, mobile-friendly designs.'
];

const questionPool = [
    { text: 'What is a closure?', options: ['A function inside another function', 'A loop', 'A variable'], correctAnswer: 'A function inside another function' },
    { text: 'What is hoisting in JavaScript?', options: ['Variable declarations move to the top', 'Strict mode', 'Event loop'], correctAnswer: 'Variable declarations move to the top' },
    { text: 'What does "this" refer to?', options: ['Current object', 'Global object', 'Parent object'], correctAnswer: 'Current object' },
    { text: 'What is the virtual DOM?', options: ['A copy of the real DOM', 'A module loader', 'A backend server'], correctAnswer: 'A copy of the real DOM' },
    { text: 'What is JSX?', options: ['JavaScript XML', 'A data type', 'A Node package'], correctAnswer: 'JavaScript XML' },
    { text: 'What is REST?', options: ['A set of web service protocols', 'A database', 'A front-end library'], correctAnswer: 'A set of web service protocols' },
    { text: 'What is the use of useEffect in React?', options: ['To handle side effects', 'To create components', 'To manage state'], correctAnswer: 'To handle side effects' },
    { text: 'What is Flexbox?', options: ['A CSS layout model', 'A JavaScript library', 'A Node.js framework'], correctAnswer: 'A CSS layout model' },
    { text: 'What is a promise in JavaScript?', options: ['An object representing a future value', 'A function', 'A loop'], correctAnswer: 'An object representing a future value' },
    { text: 'What is Node.js?', options: ['JavaScript runtime environment', 'A browser API', 'A testing library'], correctAnswer: 'JavaScript runtime environment' },
    { text: 'What is the difference between var, let, and const?', options: ['Variable declaration keywords', 'CSS properties', 'Data types'], correctAnswer: 'Variable declaration keywords' },
    { text: 'What is GraphQL?', options: ['A query language for APIs', 'A database', 'A front-end framework'], correctAnswer: 'A query language for APIs' },
    { text: 'What is a component in Vue.js?', options: ['Reusable UI elements', 'A data store', 'A routing mechanism'], correctAnswer: 'Reusable UI elements' },
    { text: 'What is Angular?', options: ['A front-end framework', 'A database', 'A server'], correctAnswer: 'A front-end framework' },
    { text: 'What is semantic HTML?', options: ['HTML with meaningful tags', 'A JavaScript function', 'A CSS module'], correctAnswer: 'HTML with meaningful tags' },
];

const getRandomQuestions = (numQuestions) => {
    const shuffledQuestions = questionPool.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numQuestions);
};

const generateRandomQuizzes = (numQuizzes = 15, questionsPerQuiz = 5) => {
    return Array.from({ length: numQuizzes }, (v, i) => ({
        id: i + 1,
        title: quizTitles[i % quizTitles.length],
        description: quizDescriptions[i % quizDescriptions.length],
        questions: getRandomQuestions(questionsPerQuiz).map((q, idx) => ({
            id: idx + 1,
            text: q.text,
            options: q.options,
            correctAnswer: q.correctAnswer
        }))
    }));
};

export const quizzes = generateRandomQuizzes(15);

export default quizzes;
