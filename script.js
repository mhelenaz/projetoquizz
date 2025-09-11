// Perguntas para os níveis fácil, médio e difícil
const questionsEasy = [
  { question: "Qual é a capital da França?", options: ["Berlim", "Madri", "Paris", "Roma"], answer: "Paris" },
  { question: "Qual o maior planeta do nosso sistema solar?", options: ["Vênus", "Júpiter", "Marte", "Terra"], answer: "Júpiter" },
  { question: "Quem pintou a Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: "Da Vinci" },
  { question: "Qual o animal mais rápido do mundo?", options: ["Leão", "Guepardo", "Falcão-peregrino", "Cavalo"], answer: "Falcão-peregrino" },
  { question: "Qual é a capital do Japão?", options: ["Seul", "Pequim", "Bangkok", "Tóquio"], answer: "Tóquio" }
];

const questionsMedium = [
  { question: "Qual é o rio mais longo do mundo?", options: ["Rio Nilo", "Rio Amazonas", "Rio Yangtze", "Rio Mississipi"], answer: "Rio Amazonas" },
  { question: "Quem escreveu a obra 'O Pequeno Príncipe'?", options: ["Antoine de Saint-Exupéry", "Victor Hugo", "Lewis Carroll", "J.K. Rowling"], answer: "Antoine de Saint-Exupéry" },
  { question: "Qual o nome da montanha mais alta do mundo?", options: ["Monte Everest", "K2", "Monte Kilimanjaro", "Monte Fuji"], answer: "Monte Everest" },
  { question: "Quantos corações tem um polvo?", options: ["Um", "Dois", "Três", "Quatro"], answer: "Três" },
  { question: "Em que ano a Revolução Francesa começou?", options: ["1789", "1776", "1815", "1914"], answer: "1789" }
];

const questionsHard = [
  { question: "Quem formulou a Teoria da Relatividade Geral?", options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"], answer: "Albert Einstein" },
  { question: "Em que ano a Batalha de Hastings ocorreu?", options: ["1066", "1492", "1776", "1815"], answer: "1066" },
  { question: "Qual é a massa atômica aproximada do Ouro (Au)?", options: ["197", "108", "79", "39"], answer: "197" },
  { question: "Quem foi o líder da Revolução Haitiana?", options: ["Toussaint Louverture", "Jean-Jacques Dessalines", "François Duvalier", "Henri Christophe"], answer: "Toussaint Louverture" },
  { question: "Qual o teorema matemático que afirma que 'a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa'?", options: ["Teorema de Tales", "Teorema de Pitágoras", "Teorema de Fermat", "Teorema de Euclides"], answer: "Teorema de Pitágoras" }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const welcomeScreen = document.getElementById('welcome-screen');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.querySelector('.quiz-container');

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');

startBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  startScreen.classList.remove('hidden');
});

document.querySelectorAll('.difficulty-button').forEach(button => {
  button.addEventListener('click', () => {
    startGame(button.dataset.level);
  });
});

function startGame(level) {
  switch (level) {
    case 'easy':
      questions = questionsEasy;
      break;
    case 'medium':
      questions = questionsMedium;
      break;
    case 'hard':
      questions = questionsHard;
      break;
  }
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = score;

  startScreen.classList.add('hidden');
  endScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  showQuestion();
}

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionText.textContent = current.question;

  optionsContainer.innerHTML = '';
  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-button');
    btn.addEventListener('click', () => selectOption(option, current.answer, btn));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedOption, correctAnswer, selectedBtn) {
  const buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctAnswer) {
    score++;
    scoreElement.textContent = score;
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('incorrect');
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add('correct');
      }
    });
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      finishGame();
    }
  }, 1500);
}

function finishGame() {
  gameScreen.classList.add('hidden');
  endScreen.classList.remove('hidden');
  finalScoreElement.textContent = score;
}

