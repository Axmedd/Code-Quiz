const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progress-text");
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
    question: "Which Country Recently Had A Name Change?",
    choice1: "Turkey",
    choice2: "Romania",
    choice3: "Jordan",
    choice4: "Hungary",

    answer: "Turkey",
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



function questionLoop() {
  for (let i = 0; i < questions.length; i++) {
    var response = question(questions[i]);
  }
  if (response === questions[i].answer) {
    score++;
  }
}

function buttonClicked() {
  document.getElementById(".choice-text") = ++i;
}
