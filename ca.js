const questions = [
  {
    question: "What is the key features of the upcoming indian census scheduled to be completed by March 1 2027?",
    options: [
      "It will be conducted in multiple regional languages",
      "It will be data on income brackets",
      "It will be conducted digitally and include caste-based data",
      "It will focus only on urban households"
    ],
    answer: 2
  },
  {
    question: "Which country recently hosted the 2022 Winter Olympics?",
    options: ["China", "Japan", "South Korea", "Russia"],
    answer: 0
  },
  {
    question: "Which country became the first to land on the far side of the moon?",
    options: ["USA", "China", "India", "Russia"],
    answer: 1
  },
  {
    question: "Who was the first woman to serve as the Vice President of the United States?",
    options: ["Kamala Harris", "Hillary Clinton", "Nancy Pelosi", "Condoleezza Rice"],
    answer: 0
  },
  {
    question: "In which year did the UK officially leave the European Union?",
    options: ["2015", "2018", "2017", "2016"],
    answer: 3
  },
  {
    question: "What is the GDP growth forecast for India for the fiscal year 2025-26 according to the RBI?",
    options: ["5.2%", "6.5%", "7.8%", "4.9%"],
    answer: 1
  },
  {
    question: "Which country recently hosted the COP26 climate summit?",
    options: ["USA", "France", "UK", "Germany"],
    answer: 2
  },
  {
    question: "Who is the current Chancellor of Germany?",
    options: ["Angela Merkel", "Olaf Scholz", "Emmanuel Macron", "Markus Söder"],
    answer: 1
  },
  {
    question: "Which country’s government recently declared a ‘climate emergency’ in 2022?",
    options: ["Canada", "Australia", "UK", "France"],
    answer: 0
  },
  {
    question: "What incident occurred near the Canadian border in June 2025?",
    options: [
      "Earthquake near Niagara Falls",
      "Massive ice storm hit Vancouver",
      "Escape of 14 million honeybees after a truck accident",
      "Collapse of a wildlife sanctuary"
    ],
    answer: 2
  }
];

// Use solid colors or image URLs
const backgrounds = [
  "url('census.jpg')",
  "url('olympics.jpg')",
  "url('moon.jpg')",
  "url('usa.jpg')",
  "url('un.jpg')",
  "url('gdp.jpg')",
  "url('cop26.jpg')",
  "url('germany.jpg')",
  "url('climate.jpg')",
  "url('canada.jpg')",
  "url('cascore.jpg')"
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
  startTimer();

  const q = questions[currentQuestion];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";

  // Set background
  const bg = backgrounds[currentQuestion];
  if (bg.startsWith("url")) {
    document.body.style.backgroundImage = bg;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor = "";
  } else {
    document.body.style.background = bg;
    document.body.style.backgroundImage = "none";
  }

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index);
    optionsBox.appendChild(btn);
  });

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
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
  questionBox.textContent = `Quiz Finished! You scored ${score} out of ${questions.length}`;
  optionsBox.innerHTML = "";
  timerDisplay.style.display = "none";
  questionNumber.style.display = "none";
  document.body.style.background = "#2c3e50";
  document.body.style.backgroundImage = "none";
}

// Start quiz
loadQuestion();

