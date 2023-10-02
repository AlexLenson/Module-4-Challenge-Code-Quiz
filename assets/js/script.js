// Quiz questions
var questions = [
    {
        title: "Which data type is used to represent whole numbers in JavaScript?",
        choices: ["String", "Boolean", "Integer", "Number"],
        answer: "Number"
    },
    {
        title: "Which of the following is a valid comment in JavaScript?",
        choices: ["// This is a comment", "<!--This is a comment-->", "/*This is a comment*/", "#This is a comment"],
        answer: "// This is a comment"
    },
    {
        title: "How do you write a function in JavaScript?",
        choices: ["function: myFunction()", "function myFunction()", "myFunction(): function", "myFunction() = function"],
        answer: "function myFunction()"
    },
    {
        title: "What is the result of 2 + '2' in JavaScript?",
        choices: ["4", "22", "TypeError", "NaN"],
        answer: "22"
    },
    {
        title: "Which built-in method can be used to convert a string to uppercase in JavaScript?",
        choices: ["toUpperCase()", "toUpper()", "toUpperCaseCase()", "upperCase()"],
        answer: "toUpperCase()"
    }
];



// start by setting the variables to keep track of game state
// currentQuesiton
// timeRemaining

//  Declare your dom elements such as
// submit button dom Element
// timer Element
// score


// Global variables
var count = 0;

// Elements
var startBtn = document.querySelector("#start-quiz-btn");
var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelectorAll("#questions-page button")

// Loads questions page
function loadQuestionsPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("questions-page").style.display = "flex";
    document.getElementById("results-page").style.display = "none";
    document.getElementById("highscores-page").style.display = "none";
    getQuestion();
}

// Gets a question and displays to page
function getQuestion() {

    currentQuestion = questions[count];
    questionTitle.innerHTML = currentQuestion.title;
    
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        answerChoices[i].innerHTML = currentQuestion.choices[i];
    }

    count++;
    return count;

}


// function to start timer and then call question function to generate the first question and answer buttons.

// function to pull question from questions array and generate buttons with answers by looping over the answer arrays.   

// event function to grab the value of the button clicked and compare to answer.  If same recall question function for the next question, else decrement timer and recall question function for next question

// function to end quiz and capture time remaining as high score.  Store the highscores in local storage.  Dont forget to format the data coming back from high scores in descending order



// Event listeners

startBtn.addEventListener("click", loadQuestionsPage);






