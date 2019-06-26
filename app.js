function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
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

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  gameOverHTML +=
    "<input type='button' value='もう一度クイズをやる' onclick='Button_Click();' />";

  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

function Button_Click() {
  window.location.reload();
}

// create questions
var questions = [
  new Question("日本の首都は？", ["大阪", "福岡", "東京", "名古屋"], "東京"),
  new Question(
    "ベトナムの首都は？",
    ["カントー", "ハノイ", "ホーチミン", "ダナン"],
    "ハノイ"
  ),
  new Question(
    "東京ディズニーランドがある都道府県は？",
    ["東京都", "北海道", "千葉県", "京都府"],
    "千葉県"
  ),
  new Question(
    "コーヒーの生産量がもっとも多い国は？",
    ["日本", "ブラジル", "中国", "チリ"],
    "ブラジル"
  ),
  new Question(
    "コーヒーの生産量が2番目に多い国は？",
    ["ベトナム", "ブラジル", "オーストラリア", "インド"],
    "ベトナム"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
