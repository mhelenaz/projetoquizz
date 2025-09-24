// Dados das perguntas: temas x níveis
// Cada pergunta: {question, options: [], answer}
const questionsDB = {
  geografia: {
    facil: [
      { question: "Qual é a capital do Brasil?", options: ["Brasília", "Rio", "São Paulo", "Salvador"], answer: "Brasília" },
      { question: "Qual é o maior continente?", options: ["África", "Ásia", "Europa", "América"], answer: "Ásia" },
      //... até 20 perguntas
    ],
    medio: [
      { question: "Qual é o maior deserto do mundo?", options: ["Sahara", "Gobi", "Antártida", "Kalahari"], answer: "Antártida" },
      { question: "Em que país fica Machu Picchu?", options: ["Chile", "Peru", "Bolívia", "Argentina"], answer: "Peru" },
      //... até 20 perguntas
    ],
    dificil: [
      { question: "Qual é a profundidade média do oceano Atlântico?", options: ["3646m", "3962m", "3472m", "4211m"], answer: "3646m" },
      { question: "Qual país possui mais fronteiras terrestres?", options: ["China", "Rússia", "Brasil", "Alemanha"], answer: "China" },
      //... até 20 perguntas
    ],
  },
  historia: {
    facil: [
      { question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"], answer: "Pedro Álvares Cabral" },
      { question: "Em que ano terminou a Segunda Guerra Mundial?", options: ["1945", "1939", "1918", "1963"], answer: "1945" },
      //... até 20 perguntas
    ],
    medio: [
      { question: "Quem foi o primeiro imperador do Brasil?", options: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"], answer: "Dom Pedro I" },
      { question: "Qual era o nome da cidade chamada Bizâncio?", options: ["Constantinopla", "Roma", "Atenas", "Cartago"], answer: "Constantinopla" },
      //... até 20 perguntas
    ],
    dificil: [
      { question: "Em que ano ocorreu a Revolta de Canudos?", options: ["1896", "1889", "1902", "1871"], answer: "1896" },
      { question: "Quem foi o autor da obra \"O Príncipe\"?", options: ["Machiavel", "Galileu", "Shakespeare", "Voltaire"], answer: "Machiavel" },
      //... até 20 perguntas
    ],
  },
  ciencia: {
    facil: [
      { question: "Qual planeta é conhecido como o Planeta Vermelho?", options: ["Marte", "Vênus", "Júpiter", "Saturno"], answer: "Marte" },
      { question: "Qual é o estado da água em temperatura ambiente?", options: ["Líquido", "Sólido", "Gasoso", "Plasma"], answer: "Líquido" },
      //... até 20 perguntas
    ],
    medio: [
      { question: "Qual o símbolo químico do ouro?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
      { question: "Quem desenvolveu a teoria da relatividade?", options: ["Einstein", "Newton", "Galileu", "Tesla"], answer: "Einstein" },
      //... até 20 perguntas
    ],
    dificil: [
      { question: "Qual é a fórmula química da cafeína?", options: ["C8H10N4O2", "C6H12O6", "H2O", "NaCl"], answer: "C8H10N4O2" },
      { question: "O que estuda a ciência chamada entomologia?", options: ["Insetos", "Estrelas", "Plantas", "Fungos"], answer: "Insetos" },
      //... até 20 perguntas
    ],
  }
};

// Preencher perguntas até 20 para exemplo - para efeito de demonstração, duplicarei perguntas
function fillQuestions(theme) {
  for(let level in questionsDB[theme]){
    while(questionsDB[theme][level].length < 20){
      // duplicar as perguntas já existentes para completar 20
      questionsDB[theme][level] = questionsDB[theme][level].concat(questionsDB[theme][level]);
      questionsDB[theme][level] = questionsDB[theme][level].slice(0, 20);
    }
  }
}
["geografia","historia","ciencia"].forEach(t => fillQuestions(t));

// Variables
let selectedTheme = "";
let selectedLevel = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Elementos DOM
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const themeSelect = document.getElementById('theme-select');
const levelSelect = document.getElementById('level-select');

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');

const currentScoreText = document.getElementById('current-score');

const finalScoreText = document.getElementById('final-score-text');
const rankingThemeLevel = document.getElementById('ranking-theme-level');
const rankingList = document.getElementById('ranking-list');
const quizThemeLevel = document.getElementById('quiz-theme-level');

// Função para embaralhar array
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Iniciar quiz
startBtn.addEventListener('click', () => {
  selectedTheme = themeSelect.value;
  selectedLevel = levelSelect.value;

  currentQuestions = shuffleArray([...questions]()
