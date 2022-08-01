function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show questions
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }

  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
      quiz.guess(guess);
      populate();
    };
  }

  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML =
      "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  }
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var quiz = new Quiz(questions);

var questions = [
  new Questions(
    "What is Capital Of Somalia?",
    ["Mogadishu", "Addis Ababa", "Nairobi", "Hargeisa"],
    "Mogadishu"
  ),
  new Questions(
    "Which Country Recently Had A Name Change?",
    ["Turkey", "Romania", "Jordan", "Hungary"],
    "Turkey"
  ),
  new Questions(
    "Which Country Is The Biggest?",
    ["Egypt", "Pakistan", "Nigeria", "Bolivia"],
    "Bolivia"
  ),
  new Questions(
    "Which City Is The Biggest?",
    ["Beijing", "Tokyo", "Mumbai", "Delhi"],
    "Tokyo"
  ),
];

var quiz = new Quiz(questions);

populate();
