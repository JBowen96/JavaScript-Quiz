//we need to create a whole bunch of vars from the html
var startqDiv = document.getElementById("start");
var startqButton = document.getElementById("sbtn");
var qBody = document.getElementById("quiz");
var qTimer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var resultsEl = document.getElementById("result");
var endDiv = document.getElementById("end");
var finalScoreEl = document.getElementById("endScore");
var scoreInputName = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submitScore");
var scoreContainer = document.getElementById("scoreContainer");
var scoreDiv = document.getElementById("scorePage");
var scoreDisplayName = document.getElementById("highscore-abc");
var scoreDisplayScore = document.getElementById("highscore-num");
var endGameBtns = document.getElementById("endbtns");


// Quiz question object
var quizQuestions = [{
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"
},
{
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"
},
{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "c"
},
{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"
},
{
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "bacon",
    choiceB: "<src>",
    choiceC: "<head>",
    choiceD: "<script>",
    correctAnswer: "d"
},
{
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"
},
{
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"
},

];

//vars for later reference
var finalqCount = quizQuestions.length;
var currentqCount = 0;
var timeRe = 60;
var timerInt;
var score = 0;
var correct;

//works through the array of questions
function generateQuestions() {
    endDiv.style.display = "none";
    if (currentqCount === finalqCount) {
        return showScore();
    }
    var currentQ = quizQuestions[currentqCount];
    questionsEl.innerHTML = "<p>" = currentQ.question + "</p>";
    buttonA.innerHTML = currentQ.choiceA;
    buttonB.innerHTML = currentQ.choiceB;
    buttonC.innerHTML = currentQ.choiceC;
    buttonD.innerHTML = currentQ.choiceD;
};

//this hides the start button and starts the timer, as well as starts the first question
function startQ() {
    endDiv.style.display = "none";
    startqDiv.style.display = "none";
    generateQuestions();

    //timer
    timerCount = setInterval(function () {
        timeRe--;
        quizTimer.textContent = "Time Remaining: " + timeRe;

        if (timeRe === 0) {
            clearInterval(timerInt);
            showScore();
        }
    }, 1000);
    qBody.style.display = "block";
}

//end game screen
function showScore() {
    qBody.style.display = "none";
    endDiv.style.display = "flex";
    clearInterval(timerInt);
    scoreInputName.value = "";
    finalScoreEl.innerHTML = "Answered " + score + "of" + quizQuestions.length + "correctly!";
}

//this is for when you click the submit button
submitScoreBtn.addEventListener("click", function highscore(){
    if(scoreInputName.value ==="") {
        alert("Please type initials");
        return false;
    }else{
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        var currentPlayer = scoreInputName.value.trim();
        var currentScore = {
            name : currentPlayer,
            score : score
        };
        endDiv.style.display = "none";
        scoreContainer.style.display = "flex";
        scoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedScores.push(currentScore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        generateScores();
    }
});

