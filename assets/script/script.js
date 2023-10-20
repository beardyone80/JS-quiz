// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');

// State variable
let currentQuestionIndex = 0;

let questions = [
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Cardiff', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    {
        questions: 'How many continents are there?',
        options: ['5', '6', '7', '8', '9'],
        correctAnswer: '7'
    },
];

// Event listeners

nextButton.addEventListener('click', loadNextQuestion);

// Init the quiz
initialiseQuiz();

//Initialise the quiz by displaying the first question
function initialiseQuiz() {
    displayQuestion(
        questions[
            currentQuestionIndex
        ]
    )
}

function displayQuestion(questionObj) {

    quizContainer.innerHTML = "";

    const questionElement = document.createElement('h2');
    questionElement.innerText = questionObj.question;


}