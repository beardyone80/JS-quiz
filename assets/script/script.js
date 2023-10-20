// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-button');

// State variable
let currentQuestionIndex = 0;

let questions = [
    {
        question: 'Where was the first place we went to on our first date?',
        options: ['Trampoline Park', 'St. Fagans', 'CoffiCo', 'Forest Drive', 'MacArthur Glen'],
        correctAnswer: 'CoffiCo'
    },
    {
        question: 'Where did we have our first kiss?',
        options: ['Outside CoffiCo', 'Harvester Car Park', 'Tent of Mirrors', 'Lift at St. Fagans', 'MarcArthur Glen'],
        correctAnswer: 'Tent of Mirrors'
    },
    {
        question: 'What did Carys do that made Paul start to fall in love with her?',
        options: ['Be Carys', 'Give a HUGE hello squeeze', 'Jump in a puddle', 'Be amazing', 'All of these'],
        correctAnswer: 'All of these'
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

    // clear the current question from the screen
    quizContainer.innerHTML = "";
    //create a h2 on the screen
    const questionElement = document.createElement('h2');
    // put the question text inside the h2
    questionElement.innerText = questionObj.question;
    // print it to the screen
    quizContainer.appendChild(questionElement);

    // make the possible answer buttons appear using createOptionButton function
    questionObj.options.forEach( option => {
        const button = createOptionButton(option);
        quizContainer.appendChild(button);
    });
}

function createOptionButton(option) {
    // dynamically create a button in html
    const button = document.createElement('button');
    // set the text of the button to be 'option'
    button.innerText = option;
    // style the button
    button.classList.add('btn', 'btn-outline-primary', 'mt-2');
    // add event listener
    button.addEventListener('click', () => handleOptionClick(option));
    // return the created button as a result of the function. Print to the screen.
    return button
}

function handleOptionClick(optionSelected) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (optionSelected === correctAnswer) {
        // could increase score etc
        alert('Hoooray You Are Right!!');
    } else {
        alert('Ooooopsy-daisy you got it wrong');
    }
    loadNextQuestion();
}

function loadNextQuestion() {
    // advance to the next question which is in currentQuestionIndex array
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex])
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = '<h2>Game Over!!!</h2>';
    nextButton.classList.add('d-none');
}