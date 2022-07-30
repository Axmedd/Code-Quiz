const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is Capital Of Somalia",
    choice1: "Mogadishu",
    choice2: "Addis Ababa",
    choice3: "Nairobi",
    choice4: "Hargeisa",
    answer: "Mogadishu",
  },
  {
    question: "Is Somalia Is Three Times The Size Of The UK",
    choice1: "Yes",
    choice2: "Nope",

    answer: "Yes",
  },
  {
    question: "What is Capital Of Australia",
    choice1: "Sydney",
    choice2: "Canberra",
    choice3: "Auckland",
    choice4: "Austria",
    answer: "Canberra",
  },
  {
    question: "Which Country Is The Biggest?",
    choice1: "Egypt",
    choice2: "Pakistan",
    choice3: "Nigeria",
    choice4: "Bolivia",
    answer: "Bolivia",
  },
  {
    question: "Which City Is The Biggest?",
    choice1: "Beijing",
    choice2: "Tokyo",
    choice3: "Mumbai",
    choice4: "Delhi",
    answer: "Tokyo",
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = { ...questions };
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.InnerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.InnerHTML = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.InnerHTML = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.InnerHTML = score;
};

startGame();
