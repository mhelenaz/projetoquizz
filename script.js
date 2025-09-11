// Perguntas separadas por nível
const questionsData = {
  easy: [
    { question: "Qual é a capital da França?", options: ["Berlim", "Paris", "Madrid", "Roma"], answer: "Paris" },
    { question: "Qual o maior planeta do sistema solar?", options: ["Júpiter", "Marte", "Terra", "Saturno"], answer: "Júpiter" },
    { question: "Quem pintou a Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: "Da Vinci" },
    { question: "Qual o animal mais rápido do mundo?", options: ["Leão", "Guepardo", "Falcão-peregrino", "Cavalo"], answer: "Falcão-peregrino" },
    { question: "Qual é a capital do Japão?", options: ["Seul", "Pequim", "Bangkok", "Tóquio"], answer: "Tóquio" }
  ],

  medium: [
    { question: "Qual é o rio mais longo do mundo?", options: ["Nilo", "Amazonas", "Yangtze", "Mississipi"], answer: "Amazonas" },
    { question: "Quem escreveu 'O Pequeno Príncipe'?", options: ["Saint-Exupéry", "Victor Hugo", "Lewis Carroll", "J.K. Rowling"], answer: "Saint-Exupéry" },
    { question: "Qual a montanha mais alta do mundo?", options: ["Everest", "K2", "Kilimanjaro", "Fuji"], answer: "Everest" },
    { question: "Quantos corações tem um polvo?", options: ["1", "2", "3", "4"], answer: "3" },
    { question: "Em que ano começou a Revolução Francesa?", options: ["1789", "1776", "1815", "1914"], answer: "1789" }
  ],

  hard: [
    { question: "Quem formulou a Teoria da Relatividade Geral?", options: ["Newton", "Niels Bohr", "Einstein", "Hawking"], answer: "Einstein" },
    { question: "Em que ano ocorreu a Batalha de Hastings?", options: ["1066", "1492", "1776", "1815"], answer: "1066" },
    { question: "Qual é a massa atômica aproximada do Ouro (Au)?", options: ["197", "108", "79", "39"], answer: "197" },
    { question: "Quem liderou a Revolução Haitiana?", options: ["Louverture", "Dessalines", "Duvalier", "Christophe"], answer: "Louverture" },
    { question: "Qual teorema afirma que 'a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa'?", options: ["Tales", "Pitágoras", "Fermat", "Euclides"], answer: "Pitágoras" }
  ]
};

// Elementos DOM
const welcomeScreen = document.getElementById('welcome-screen');
const levelSelection = document.getElementById('level-selection');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

const btnStart = document.getElementById('btn-start');
const levelButtons = document.querySelectorAll('.level-btn');
const btnRestart = document.getElementById('btn-restart');

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const scoreDisplay = document.getElementById('score');
const finalScoreDisplay = document.getElementById('final-score');

let currentLevel = '';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Mostrar tela
function showScreen(screen) {
  [welcomeScreen, levelSelection, quizScreen, endScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// Começar o jogo (após clicar Começar)
btnStart.addEventListener('click', () => {
  showScreen(levelSelection);
});

// Escolher nível
levelButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentLevel = button.dataset.level;
    currentQuestions = [...questionsData[currentLevel]];
    currentIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    showScreen(quizScreen);
    showQuestion();
  });
});

// Mostrar pergunta atual e opções
function showQuestion() {
  const current = currentQuestions[currentIndex];
  questionNumber.textContent = `Pergunta ${currentIndex + 1} de ${currentQuestions.length}`;
  questionText.textContent = current.question;

  optionsContainer.innerHTML = '';

  current.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = option;
    btn.disabled = false;
    btn.addEventListener('click', () => selectOption(btn, option, current.answer));
    btn.classList.add('btn'); // estilização
    optionsContainer.appendChild(btn);
  });
}

// Selecionar opção e dar feedback
function selectOption(button, selected, correct) {
  const buttons = optionsContainer.querySelectorAll('button');

  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add('correct');
    score++;
    scoreDisplay.textContent = score;
  } else {
    button.classList.add('incorrect');
    buttons.forEach(btn => {
      if (btn.textContent === correct) {
        btn.classList.add('correct');
      }
    });
  }

  // Espera 1.5 segundos e mostra próxima ou finaliza
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }, 1500);
}

// Final do quiz
function finishQuiz() {
  finalScoreDisplay.textContent = score;
  showScreen(endScreen);
}

// Reiniciar jogo
btnRestart.addEventListener('click', () => {
  showScreen(levelSelection);
});
