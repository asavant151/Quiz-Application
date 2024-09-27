const calculateScore = (quiz, answers) => {
    return quiz.questions.reduce((score, question) => {
        if (answers[question.id] === question.correctAnswer) {
            return score + 1;
        }
        return score;
    }, 0);
};

export default calculateScore;
