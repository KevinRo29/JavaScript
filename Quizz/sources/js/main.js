// Get the elements we need from the HTML
const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");


// Create an array of objects to store the questions, choices and correct answers
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "New York", "Dublin"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Jupiter", "Mars", "Mercury"],
        correct: 2
    },
    {
        question: "Which of these is not a mammal?",
        choices: ["Whale", "Shark", "Dolphin", "Seal"],
        correct: 1
    },
    {
        question: "How many continents are in the world?",
        choices: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What is the largest country in the world?",
        choices: ["Russia", "Canada", "China", "United States"],
        correct: 0
    },
    {
        question: "How many bones are in the human body?",
        choices: ["206", "207", "208", "209"],
        correct: 0
    }
]

// Create variables to store the current question index and the user score
let currentQuestionIndex = 0;
let userScore = 0;

// Create a function to display the current question
function displayQuestion(questionIndex){
    const question = questions[questionIndex]; // Get the question object from the array
    questionElement.textContent = question.question; // Display the question text
    choicesElement.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.classList.add("choice"); // Add the class "choice" to the button
        choiceButton.textContent = choice; // Display the choice text
        choiceButton.addEventListener("click", () => checkAnswer(index)); // Add an event listener to the button
        choicesElement.appendChild(choiceButton); // Add the button to the choicesElement
    });
}

// Create a function to check the answer
function checkAnswer(selectedIndex){
    const question = questions[currentQuestionIndex]; // Get the question object from the array
    if(selectedIndex === question.correct){
        userScore++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Wrong!, the correct answer was: " + question.choices[question.correct];
    }

    choicesElement.style.pointerEvents = "none"; // Disable the buttons
    nextButton.style.display = "block"; // Display the next button
}

// Create a function to display the next question
function nextQuestion(){
    currentQuestionIndex++;
    feedbackElement.textContent = "";
    choicesElement.style.pointerEvents = "auto";
    nextButton.style.display = "none";

    if(currentQuestionIndex < questions.length){
        displayQuestion(currentQuestionIndex);
    }else{
        quiz.innerHTML = `<h2>Quiz completed!</h2><p>Your score: ${userScore} out of ${questions.length}</p>`;
    }
}

nextButton.addEventListener("click", nextQuestion);

displayQuestion(currentQuestionIndex);