const questions = [
  {
    question: "Which country has the highest number of neighbouring countries (land borders)?",
    options: ["Germany", "Russia", "Brazil", "India"],
    answer: 1
  },
  {
    question: "What is the capital of Newzwaland?",
    options: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
    answer: 0
  },
  {
    question: "Which ocean is the deepest?",
    options: ["Atlantic", "Indian", "Southern", "Pacific"],
    answer: 3
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Rockies", "Alps", "Andes", "Himalayas"],
    answer: 3
  },
  {
    question: "Which country has the most islands?",
    options: ["Philippines", "Norway", "Indonesia", "Sweden"],
    answer: 3
  },
  {
    question: "Which is the largest plateau in the world?",
    options: ["Anatolian Plateau", "Deccan Plateau", "Colorado Plateau", "Tibetan Plateau"],
    answer: 3
  },
  {
    question: "Which Indian city is famously known as the 'Pink City'?",
    options: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    answer: 0
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Malta", "Vatican City", "San Marino"],
    answer: 2
  },
  {
    question: "Which U.S. state has the most active volcanoes?",
    options: ["Alaska", "California", "Hawaii", "Washington"],
    answer: 0
  },
  {
    question: "Which country shares the longest border with India?",
    options: ["Bangladesh", "China", "Nepal", "Pakistan"],
    answer: 0
  }
];

const backgrounds = [
  "url('geo1.jpg')",
  "url('geo2.jpg')",
  "url('geo3.jpg')",
  "url('geo4.jpg')",
  "url('geo5.jpg')",
  "url('geo6.jpg')",
  "url('geo7.jpg')",
  "url('geo8.jpg')",
  "url('geo9.jpg')",
  "url('geo10.jpg')",
  "url('geoscore.jpg')" // For the score screen
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("questionNumber");

function loadQuestion() {
  clearInterval(timer);

  if (currentQuestion >= questions.length) {
    showScore();
    return;
  }

  // Set unique background per question
  if (currentQuestion < backgrounds.length) {
    document.body.style.backgroundImage = backgrounds[currentQuestion];
  }

  timeLeft = 15;
  timerEl.textContent = `Time: ${timeLeft}s`;
  timer = setInterval(updateTimer, 1000);

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  questionNumberEl.textContent = `Question ${currentQuestion + 1}`;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function updateTimer() {
  timeLeft--;
  timerEl.textContent = `Time: ${timeLeft}s`;
  if (timeLeft === 0) {
    clearInterval(timer);
    showNext();
  }
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestion].answer) {
    score++;
  }
  showNext();
}

function showNext() {
  currentQuestion++;
  loadQuestion();
}

function showScore() {
  clearInterval(timer);
  document.body.style.backgroundImage = backgrounds[backgrounds.length - 1]; // Show final background

  questionEl.textContent = "🎉 Quiz Completed!";
  questionNumberEl.textContent = "";
  timerEl.textContent = "";
  optionsEl.innerHTML = `<div style="color:#00ffff; font-size:0.9rem;">Your Score: ${score} / ${questions.length}</div>`;
}

// Start quiz
loadQuestion();

