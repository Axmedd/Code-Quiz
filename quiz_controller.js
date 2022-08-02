const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById(`question-container`);
const questionCounterElement = document.getElementById(`question-counter`);

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startButton.classList.add(`hide`);
  //questionContainerElement.classList.remove(`hide`);
  // questionCounterElement.classList.remove(`hide`);
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
};

// score function
