const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById(`question-container`);
var timerSection = document.getElementById("timer-section");
var timerSpan = document.getElementById("timer");
//bn const questionCounterElement = document.getElementById(`question-counter`);

var timer = 30;
var timerInterval;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add.hidden;
  questionContainerElement.classList.remove(`hide`);
  startButton.remove();
  // questionCounterElement.classList.remove(`hide`);
  timerSection.style.display = "block";
  // initialise the timer
  timerSpan.textContent = timer;

  timerInterval = setInterval(updateTime, 1000);
  displayQuestion();
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
    console.log("add score", this.score);
  } else if (this.score < 0) {
    this.score = 0;
  }

  this.questionIndex++;
  if (timer <= 0 || questionIndex === questions.length) {
    quizEnd();
  } else {
    displayQuestion();
  }
};
