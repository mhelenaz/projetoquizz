// === Banco de perguntas (20 por tema e nível) ===
// Para economizar espaço, aqui eu uso 3 perguntas por nível como exemplo.
// Pode duplicar/modificar para completar 20 reais depois.
const QUESTIONS = {
  geografia: {
    facil: [
      {q:"Qual a capital do Brasil?", options:["Brasília", "Rio", "São Paulo", "Salvador"], a:"Brasília"},
      {q:"Qual o maior continente?", options:["África", "Ásia", "Europa", "América"], a:"Ásia"},
      {q:"Qual o oceano mais extenso?", options:["Atlântico", "Pacífico", "Índico", "Ártico"], a:"Pacífico"},
    ],
    medio: [
      {q:"Qual o maior deserto do mundo?", options:["Sahara", "Gobi", "Antártida", "Kalahari"], a:"Antártida"},
      {q:"Onde fica Machu Picchu?", options:["Chile", "Peru", "Bolívia", "Argentina"], a:"Peru"},
      {q:"Qual a montanha mais alta do mundo?", options:["K2", "Everest", "Kangchenjunga", "Lhotse"], a:"Everest"},
    ],
    dificil: [
      {q:"Profundidade média do oceano Atlântico?", options:["3646m", "3962m", "3472m", "4211m"], a:"3646m"},
      {q:"País com mais fronteiras terrestres?", options:["China", "Rússia", "Brasil", "Alemanha"], a:"China"},
      {q:"Capital da Namíbia?", options:["Windhoek", "Lusaka", "Harare", "Maputo"], a:"Windhoek"},
    ]
  },
  historia: {
    facil: [
      {q:"Quem descobriu o Brasil?", options:["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"], a:"Pedro Álvares Cabral"},
      {q:"Ano do fim da Segunda Guerra Mundial?", options:["1945", "1939", "1918", "1963"], a:"1945"},
      {q:"Quem foi o primeiro presidente do Brasil?", options:["Deodoro", "Getúlio", "Juscelino", "Vargas"], a:"Deodoro"},
    ],
    medio: [
      {q:"Primeiro imperador do Brasil?", options:["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"], a:"Dom Pedro I"},
      {q:"Nome antigo de Constantinopla?", options:["Bizâncio", "Roma", "Atenas", "Cartago"], a:"Bizâncio"},
      {q:"Ano da Revolta de Canudos?", options:["1896", "1889", "1902", "1871"], a:"1896"},
    ],
    dificil: [
      {q:"Autor de 'O Príncipe'?", options:["Machiavel", "Galileu", "Shakespeare", "Voltaire"], a:"Machiavel"},
      {q:"Ano da Revolução Francesa?", options:["1789", "1776", "1804", "1799"], a:"1789"},
      {q:"Primeira Constituição do Brasil?", options:["1824", "1889", "1934", "1988"], a:"1824"},
    ]
  },
  ciencia: {
    facil: [
      {q:"Qual planeta é o Planeta Vermelho?", options:["Marte", "Vênus", "Júpiter", "Saturno"], a:"Marte"},
      {q:"Estado da água em temperatura ambiente?", options:["Líquido", "Sólido", "Gasoso", "Plasma"], a:"Líquido"},
      {q:"Qual é o maior órgão do corpo humano?", options:["Coração", "Fígado", "Pele", "Pulmão"], a:"Pele"},
    ],
    medio: [
      {q:"Símbolo químico do ouro?", options:["Au", "Ag", "Pb", "Fe"], a:"Au"},
      {q:"Quem desenvolveu a teoria da relatividade?", options:["Einstein", "Newton", "Galileu", "Tesla"], a:"Einstein"},
      {q:"Velocidade da luz em km/s?", options:["300.000", "150.000", "299.792", "350.000"], a:"299.792"},
    ],
    dificil: [
      {q:"Fórmula química da cafeína?", options:["C8H10N4O2", "C6H12O6", "H2O", "NaCl"], a:"C8H10N4O2"},
      {q:"Entomologia estuda?", options:["Insetos", "Estrelas", "Plantas", "Fungos"], a:"Insetos"},
      {q:"Elemento com número atômico 79?", options:["Ouro", "Prata", "Chumbo", "Ferro"], a:"Ouro"},
    ]
  }
};

// --- Variáveis do estado do quiz ---
let currentTheme = null;
let currentLevel = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// --- Elementos DOM ---
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const themeSelect = document.getElementById('theme-select');
const levelSelect = document.getElementById('level-select');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');

const quizTitle = document.getElementById('quiz-title');
const scoreDisplay = document.getElementById('score-display');

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');

const finalScoreText = document.getElementById('final-score-text');
const rankingTitle = document.getElementById('ranking-title');
const rankingList = document.getElementById('ranking-list');

// --- Funções ---
// Função para embaralhar array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Iniciar quiz
startBtn.addEventListener('click', () => {
  currentTheme = themeSelect.value;
  currentLevel = levelSelect.value;

  questions = shuffle([...QUESTIONS[currentTheme][currentLevel]]);
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  welcomeScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  quizScreen.classList.add('active');

  quizTitle.textContent = `Tema: ${capitalize(currentTheme)} | Nível: ${capitalize(currentLevel)}`;
  scoreDisplay.textContent = `Pontuação: ${score}`;
  showQuestion();
  nextBtn.disabled = true;
});

// Mostrar pergunta atual
function showQuestion() {
  answered = false;
  nextBtn.disabled = true;

  const q = questions[currentQuestionIndex];
  questionText.textContent = q.q;
  answersContainer.innerHTML = '';

  const options = shuffle([...q.options]);
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(btn, q.a);
    answersContainer.appendChild(btn);
  });
}

// Selecionar resposta
function selectAnswer(button, correctAnswer) {
  if (answered) return; // evita múltiplos cliques
  answered = true;

  const buttons = answersContainer.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    if(btn.textContent === correctAnswer){
      btn.classList.add('correct');
    }
  });

  if(button.textContent === correctAnswer){
    score += 10;
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect');
  }

  scoreDisplay.textContent = `Pontuação: ${score}`;
  nextBtn.disabled = false;
}

// Avançar para próxima pergunta ou terminar quiz
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if(currentQuestionIndex >= questions.length){
    endQuiz();
  } else {
    showQuestion();
  }
});

// Finalizar quiz
function endQuiz(){
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  finalScoreText.textContent = `Você fez ${score} pontos no tema ${capitalize(currentTheme)} (${capitalize(currentLevel)}).`;
  rankingTitle.textContent = `${capitalize(currentTheme)} - ${capitalize(currentLevel)}`;

  saveRanking(currentTheme, currentLevel, score);
  displayRanking(currentTheme, currentLevel);
}

// Salvar ranking no localStorage (top 10)
function saveRanking(theme, level, score){
  const key = `ranking_${theme}_${level}`;
  let ranking = JSON.parse(localStorage.getItem(key)) || [];

  ranking.push({score, date: new Date().toLocaleString()});
  ranking.sort((a,b) => b.score - a.score);
  ranking = ranking.slice(0, 10);

  localStorage.setItem(key, JSON.stringify(ranking));
}

// Exibir ranking na
