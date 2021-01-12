//Timer
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".btn");
var buttonClicks = document.querySelector("#buttons");
var questionListing = document.querySelector(".question");
var choiceOne = document.querySelector(".choiceOption1");
var choiceTwo = document.querySelector(".choiceOption2");
var choiceThree = document.querySelector(".choiceOption3");
var choiceFour = document.querySelector(".choiceOption4");
var i = 1;


//Questions and Choices
//var question = document.querySelector("#question");
//var choices = Array.from(document.querySelectorAll(".choice-text"));

var timer;
var timerCount = 30;
//var currentQuestion = {};
//var acceptingAnswers = true;
var score = 0;
//var availableQuestions = [];
const Score_Points = 100;
//const Max_Questions= 5;

var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "1. Strings",
        choice2: "2. Booleans",
        choice3: "3. Alerts",
        choice4: "4. Numbers",
        answer: 3
    },
    {
        question: "The condition in an if/else statement is enclosed within _____ .",
        choice1: "1. Quotes",
        choice2: "2. Curly Brackets",
        choice3: "3. Parentheses",
        choice4: "4. Square Brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store _____ .",
        choice1: "1. Numbers and Strings",
        choice2: "2. Other Arrays",
        choice3: "3. Booleans",
        choice4: "4. All of the Above",
        answer: 4
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "1. Commas",
        choice2: "2. Curly Brackets",
        choice3: "3. Quotes",
        choice4: "4. Parentheses",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. Terminal/Bash",
        choice3: "3. For Loops",
        choice4: "4. Console.log",
        answer: 4
    },
   
]

function startGame() {
    startTimer();
    questionListing.innerText = questionArray[0].question;
    choiceOne.innerText = questionArray[0].choice1;
    choiceTwo.innerText = questionArray[0].choice2;
    choiceThree.innerText = questionArray[0].choice3;
    choiceFour.innerText = questionArray[0].choice4;
   console.log(document.getElementById("choiceOpton1").clicked);
   // == true) {
     //   alert("oh yea!")
   // }

    //choiceOne.addEventListener("click", function() {
       // document.body.children[4].childNodes[6].children[0].style.background = "Red";
    //})
    // console.log(questionListing);
    // console.log(choiceOne);
    // console.log(choiceTwo);
    // console.log(choiceThree);
    // console.log(choiceFour);
// if btn is clicked then go through loop
//const buttonClicks = document.getElementById("#buttons");
    buttonClicks.addEventListener("click", function() {
        //for (var i = 1; i<questionArray.length; i++) {
        questionListing.innerText = questionArray[i].question;
        choiceOne.innerText = questionArray[i].choice1;
        choiceTwo.innerText = questionArray[i].choice2;
        choiceThree.innerText = questionArray[i].choice3;
        choiceFour.innerText = questionArray[i].choice4;
        i++;

        //}
       

           // ))
            // if button click = questionArray[i].answer then perform sound action, if not then return nothing 
            // console.log(questionListing);
            // console.log(choiceOne);
            // console.log(choiceTwo);
            // console.log(choiceThree);
            // console.log(choiceFour);
     // }
    })

}


function changeColor(buttonClicks) {
    btn.style.backgroundColor = "green";
}



// function startGame() {
//     timerCount = 60;
//     score = 0;
//     startTimer()
// }

// function getNewQuestion () {
//     if(availableQuestions.length === 0) {
//         localStorage.setItem("mostRecentScore",score);
//         return window.location.assign('/end.html');
//     }
//     const questionsIndex = Math.floor(Math.random() = availableQuestions.length);
//     currentQuestion = availableQuestions[questionsIndex];
//     question.innerText = currentQuestion.question;

//     choices.forEach(choices => {
//         const number = choice.dataset('number');
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     availableQuestions.splice(questionsIndex,1);

//     acceptingAnswers = true;
// }

// choice.forEach(choice => {
//     choice.addEventListener('click', e  => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false;
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset('number');

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':'incorrect';
//         if(classToApply=== 'correct') {
//             incrementScore(Score_Points)
//         }

            
//     })
// })

    function startTimer() {
//     // Sets timer
        timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
//     //   if (timerCount >= 0) {
//     //     // Tests if win condition is met
//     //     if (isWin && timerCount > 0) {
//     //       // Clears interval and stops timer
//     //       clearInterval(timer);
//     //       winGame();
//     //     }
//     //   }
//     //   // Tests if time has run out
//     //   if (timerCount === 0) {
//     //     // Clears interval
//     //     clearInterval(timer);
//     //     loseGame();
//     //   }
        }, 1000);
    }

 startButton.addEventListener("click", startGame());

 //NEEDED
 //-high Score, final score, option to choose when answer is right or wrong, need counter to decrement with incorrect answer