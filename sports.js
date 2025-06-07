const questions = [
  {
    question: "Michael Schumacher and Lewis Hamilton share the record for most F1 World Championships (7 each). Who held the record before Schumacher?",
    options: ["Juan Manual Fangio", "Alan Prost", "Ayrton Senna", "Nikki Lauda"],
    answer: 0
  },
  {
    question: "Who holds the record for most goals in the NBA?",
    options: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Kobe Bryant"],
    answer: 2
  },
  {
    question: "Usain Bolt's 9.63s at London 2012 is the Olympic record for the 100m dash. Who held the record before him??",
    options: ["Justin Gatlin", "Carl Lewis", "Donovan Bailey", "Maurice Green"],
    answer: 1
  },
  {
    question: "Arsenal's 2003-04 Premier League campaign under Arsène Wenger is legendary for going unbeaten (26 wins, 12 draws). Who scored the most goals that season?",
    options: ["Thierry Henry", "Dennis Bergkamp", "Robert Pires", "Patrick Viera"],
    answer: 0
  },
  {
    question: "Which team has won the most NFL Super Bowls?",
    options: ["Dallas Cowboys", "New England Patriots", "Pittsburgh Steelers", "San Francisco 49ers"],
    answer: 1
  },
  {
    question: "At the Olympics, Nadia Comăneci became the first gymnast to score a perfect 10. How many perfect 10s did she earn?",
    options: ["9", "7", "3", "5"],
    answer: 1
  },
  {
    question: "Which country won the most Olympic gold medals in 2020?",
    options: ["USA", "China", "Russia", "Germany"],
    answer: 0
  },
  {
    question: "Who holds the record for the most Grand Slam titles in tennis?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"],
    answer: 2
  },
  {
    question: "Max Verstappen became F1's youngest race winner at 18. Who was the previous record holder?",
    options: ["Sebastian Vettel", "Fernando Alonso", "Kimi Raikkonen", "Nico Rosberg"],
    answer: 0
  },
  {
    question: "What sport is known for the 'Stanley Cup'?",
    options: ["Football", "Hockey", "Baseball", "Basketball"],
    answer: 1
  }
];

const backgrounds = [
  "url('sports1.jpg')",
  "url('sports2.jpg')",
  "url('sports3.jpg')",
  "url('sports4.jpg')",
  "url('sports5.jpg')",
  "url('sports6.jpg')",
  "url('sports7.jpg')",
  "url('sports8.jpg')",
  "url('sports9.jpg')",
  "url('sports10.jpg')",
  "url('sportscore.jpg')" // Final result screen background
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const questionNumber = document.getElementById("questionNumber");

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;

  // Set unique background image for each question
  if (currentQuestion < backgrounds.length) {
    document.body.style.backgroundImage = backgrounds[currentQuestion];
  }

  const q = questions[currentQuestion];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index);
    optionsBox.appendChild(btn);
  });

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
  startTimer();
}

function startTimer() {
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(selected) {
  clearInterval(timer);
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timer);
  document.body.style.backgroundImage = backgrounds[backgrounds.length - 1];
  questionBox.textContent = `🏁 Quiz Finished! You scored ${score} out of ${questions.length}`;
  optionsBox.innerHTML = "";
  timerDisplay.style.display = "none";
  questionNumber.style.display = "none";
}

// Start the quiz
loadQuestion();
