const questions = [
  {
    question: "The Nobel Prize was established in 1895. Which woman has won the most Nobel Prizes in history?",
    options: ["Mother Teresa", "Malala Yousafzai", "Marie Curie", "Janna Adams"],
    answer: 2
  },
  {
    question: "Uruguay won the first-ever men’s FIFA World Cup in 1930. Which nation won the first women’s World Cup title?",
    options: ["Germany", "US", "Brazil", "Argentina"],
    answer: 1
  },
  {
    question: "NATO was founded in 1949 with 12 original members. How many members does it have in 2024?",
    options: ["30", "28", "32", "35"],
    answer: 2
  },
  {
    question: "Mount Everest is the highest peak above sea level, but Mauna Kea is tallest from base to summit. Where is it located?",
    options: ["Japan", "Indonesia", "USA", "India"],
    answer: 2
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 2
  },
  {
    question: "Which country invented tea?",
    options: ["India", "England", "China", "Japan"],
    answer: 2
  },
  {
    question: "The first Olympics were held in Athens in 1896. Which city has hosted the Summer Olympics most often?",
    options: ["Paris", "London", "Los Angeles", "Tokyo"],
    answer: 1
  },
  {
    question: "In 2023, India became the 4th country to land on the Moon. What was the mission called?",
    options: ["Gaganyan", "Aditya-L1", "Mangalyan", "Chandrayaan"],
    answer: 3
  },
  {
    question: "The UK left the EU in 2020. Which PM was in office during Brexit?",
    options: ["Theresa May", "David Cameron", "Boris Johnson", "Liz Truss"],
    answer: 3
  },
  {
    question: "The Great Wall of China is the longest man-made structure. Who built the 2nd-longest (Kumbhalgarh Wall)?*",
    options: ["Roman's", "Mayan's", "Maurya's", "Rajputs"],
    answer: 3
  }
];

const backgrounds = [
  "url('mix1.jpg')",
  "url('mix2.jpg.png')",
  "url('mix3.jpg')",
  "url('mix4.jpg')",
  "url('mix5.jpg')",
  "url('mix6.jpg')",
  "url('mix8.jpg')",
  "url('mix7.jpg')",
  "url('mix9.jpg')",
  "url('mix10.jpg')",
  "url('mixedscore.jpg')" // score screen
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

// DOM elements
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

  document.body.style.backgroundImage = backgrounds[currentQuestion];

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
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function updateTimer() {
  timeLeft--;
  timerEl.textContent = `Time: ${timeLeft}s`;
  if (timeLeft <= 0) {
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
  document.body.style.backgroundImage = backgrounds[backgrounds.length - 1];

  questionEl.textContent = "🎓 Quiz Completed!";
  questionNumberEl.textContent = "";
  timerEl.textContent = "";
  optionsEl.innerHTML = `<div style="color:#00ffff; font-size:1.2rem;">Your Score: ${score} / ${questions.length}</div>`;
}

// Start the quiz
loadQuestion();

