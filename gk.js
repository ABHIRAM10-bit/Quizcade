const questions = [
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    answer: 1
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "Thailand", "South Korea", "China"],
    answer: 0
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Southern", "Pacific"],
    answer: 3
  },
  {
    question: "Which language is most widely spoken in the world?",
    options: ["English", "Spanish", "Hindi", "Mandarin"],
    answer: 3
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Michelangelo", "Pablo Picasso", "Leonardo da Vinci"],
    answer: 3
  },
  {
    question: "Which year did WW2 end?",
    options: ["1939", "1918", "1950", "1945"],
    answer: 3
  },
  {
    question: "Capital of France?",
    options: ["Berlin", "Paris", "Jodhpur", "Catalonia"],
    answer: 1
  },
  {
    question: "Which famous landmark was gifted by France to the United States in 1886?",
    options: ["Eiffel Tower", "Big Ben", "Statue of Liberty", "Colosseum"],
    answer: 2
  },
  {
    question: "The ancient city of Machu Picchu is located in which country?",
    options: ["Peru", "Egypt", "Brazil", "Mexico"],
    answer: 0
  },
  {
    question: "Who wrote the famous play Romeo and Juliet?",
    options: ["William Shakespeare", "Leo Tolstoy", "Charles Dickens", "Oscar Wilde"],
    answer: 0
  }
];

const backgrounds = [
  "url('geo3.jpg')",
  "url('gk2.jpg')",
  "url('geo3.jpg')",
  "url('gk4.jpg')",
  "url('gk5.jpg')",
  "url('gk6.jpg')",
  "url('gk7.jpg')",
  "url('usa.jpg')",
  "url('gk9.jpg')",
  "url('gk10.jpg')",
  "url('gkscore.jpg')"// Final screen background
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

  // Set background image for each question
  if (currentQuestion < backgrounds.length) {
    document.body.style.backgroundImage = backgrounds[currentQuestion];
  }

  // Reset and start timer
  timeLeft = 15;
  timerEl.textContent = `Time: ${timeLeft}s`;
  timer = setInterval(updateTimer, 1000);

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  questionNumberEl.textContent = `Question ${currentQuestion + 1}`;
  
  // Clear previous options
  optionsEl.innerHTML = "";

  // Render each option button
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

  questionEl.textContent = "🎉 Quiz Completed!";
  questionNumberEl.textContent = "";
  timerEl.textContent = "";
  optionsEl.innerHTML = `<div style="color:#00ffff; font-size:1.2rem;">Your Score: ${score} / ${questions.length}</div>`;
}

// Start the quiz
loadQuestion();



