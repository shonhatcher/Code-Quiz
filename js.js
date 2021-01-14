
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".btn");
var buttonClicks = document.querySelector("#buttons");
var questionListing = document.querySelector(".question");
var choiceOne = document.querySelector(".choiceOption1");
var choiceTwo = document.querySelector(".choiceOption2");
var choiceThree = document.querySelector(".choiceOption3");
var choiceFour = document.querySelector(".choiceOption4");
var i = 0; 
var buttonClicks;
var timer;
var timerCount = 30;
var score = 0;
const Score_Points = 100;

var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. Strings",
        choice2: "2. Booleans",
        choice3: "3. Alerts",
        choice4: "4. Numbers",
        answer: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within _____ .",
        choice1: "1. Quotes",
        choice2: "2. Curly Brackets",
        choice3: "3. Parentheses",
        choice4: "4. Square Brackets",
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store _____ .",
        choice1: "1. Numbers and Strings",
        choice2: "2. Other Arrays",
        choice3: "3. Booleans",
        choice4: "4. All of the Above",
        answer: 3
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "1. Commas",
        choice2: "2. Curly Brackets",
        choice3: "3. Quotes",
        choice4: "4. Parentheses",
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. Terminal/Bash",
        choice3: "3. For Loops",
        choice4: "4. Console.log",
        answer: 3
    },
   
]
    
    function reply_click (clicked_id) {
        buttonClicks = clicked_id;
        console.log(clicked_id);
    }
  
    function startGame() {
        startTimer();
        console.log(buttonClicks);
        questionListing.innerText = questionArray[i].question;
        choiceOne.innerText = questionArray[i].choice1;
        choiceTwo.innerText = questionArray[i].choice2;
        choiceThree.innerText = questionArray[i].choice3;
        choiceFour.innerText = questionArray[i].choice4;
        i++;
        buttonClicks.addEventListener("click", function() {
            questionListing.innerText = questionArray[i].question;
            choiceOne.innerText = questionArray[i].choice1;
            choiceTwo.innerText = questionArray[i].choice2;
            choiceThree.innerText = questionArray[i].choice3;
            choiceFour.innerText = questionArray[i].choice4;
         
            i++;
       

        });
    }
    

function changeColor(buttonClicks) {
    btn.style.backgroundColor = "green";
};

    function startTimer() {

        timer = setInterval(function() {
        timerCount--;
     
        timerElement.textContent = timerCount;

        }, 1000);
    }

startButton.addEventListener("click", startGame());