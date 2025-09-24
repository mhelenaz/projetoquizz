// --- Dados simplificados (3 perguntas p/ exemplo) ---
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
      {q:"Velocidade da luz (aprox.) em km/s?", options:["300000", "150000", "100000", "299792"], a:"299792"},
      {q:"Quem formulou a teoria da relatividade?", options:["Newton", "Einstein", "Galileu", "Tesla"], a:"Einstein"},
      {q:"Unidade de medida de corrente elétrica?", options:["Volt", "Ampere", "Ohm", "Watt"], a:"Ampere"},
    ],
    dificil: [
      {q:"Fórmula química da água?", options:["H2O", "CO2", "O2", "NaCl"], a:"H2O"},
      {q:"O que é a fotossíntese?", options:["Processo de plantas fazerem comida", "Respiração animal", "Decomposição", "Combustão"], a:"Processo de plantas fazerem comida"},
      {q:"Partícula subatômica com carga negativa?", options:["Próton", "Elétron", "Nêutron", "Fóton"], a:"Elétron"},
    ]
  }
};

// Variáveis globais
let currentTheme = '';
let currentLevel = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const welcomeScreen = document.getElementById('welcome-screen');
const chooseScreen = document.getElementById('choose-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const btnGoToChoose = document.getElementById('btn-go-to-choose');
const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnBackWelcome = document.getElementById('btn-back-welcome');
const btnNext = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const themeSelect = document.getElementById('theme-select');
const levelSelect = document.getElementById('level-select');

const quizTitle = document.getElementById('quiz-title');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const scoreDisplay = document.getElementById('score-display');

const finalScoreText = document.getElementById('final-score-text');
const rankingTitle = document.getElementById('ranking-title');
const rankingList = document.getElementById('ranking-list');

// Função pra mostrar uma tela e esconder as outras
function showScreen(screen){
  [welcomeScreen, chooseScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// Evento botão começar
btnGoToChoose.addEventListener('click', () => {
  showScreen(chooseScreen);
});

// Evento botão voltar para boas-vindas
btnBackWelcome.addEventListener('click', () => {
  showScreen(welcomeScreen);
});

// Evento iniciar quiz
btnStartQuiz.addEventListener('click', () => {
  currentTheme = themeSelect.value;
  currentLevel = levelSelect.value;
  questions = [...QUESTIONS[currentTheme][currentLevel]]; // clone array
  shuffleArray(questions);

  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = `Pontuação: ${score}`;
  quizTitle.textContent = `Tema: ${capitalize(currentTheme)} | Nível: ${capitalize(currentLevel)}`;

  showScreen(quizScreen);
  showQuestion();
  btnNext.disabled = true;
});

// Função para mostrar a pergunta atual
function showQuestion(){
  clearAnswers();
  const currentQ = questions[currentQuestionIndex];
  questionText.textContent = currentQ.q;

  currentQ.options.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(btn, currentQ.a));
    answersContainer.appendChild(btn);
  });
}

// Limpar respostas anteriores
function clearAnswers(){
  answersContainer.innerHTML = '';
  btnNext.disabled = true;
}

// Quando o usuário seleciona uma resposta
function selectAnswer(button, correctAnswer){
  const buttons = answersContainer.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    if(btn.textContent === correctAnswer){
      btn.classList.add('correct');
    } else {
      btn.classList.remove('correct');
    }
  });

  if(button.textContent === correctAnswer){
    score += 10;
    scoreDisplay.textContent = `Pontuação: ${score}`;
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect');
  }

  btnNext.disabled = false;
}

// Próxima pergunta ou fim do quiz
btnNext.addEventListener('click', () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    finishQuiz();
  }
});

// Finalizar quiz e mostrar resultados + ranking
function finishQuiz(){
  // Salvar pontuação no ranking
  saveRanking(currentTheme, currentLevel, score);

  finalScoreText.textContent = `Sua pontuação final foi: ${score} pontos.`;
  rankingTitle.textContent = `${capitalize(currentTheme)} - ${capitalize(currentLevel)}`;

  displayRanking(currentTheme, currentLevel);

  showScreen(resultScreen);
}

// Reiniciar o jogo
restartBtn.addEventListener('click', () => {
  showScreen(welcomeScreen);
});

// Função para salvar ranking no localStorage
function saveRanking(theme, level, score){
  const key = `ranking_${theme}_${level}`;
  let ranking = JSON.parse(localStorage.getItem(key)) || [];
  const now = new Date().toLocaleDateString();

  ranking.push({score, date: now});
  // Ordenar decrescente por score
  ranking.sort((a,b) => b.score - a.score);
  // Manter só top 10
  ranking = ranking.slice(0, 10);

  localStorage.setItem(key, JSON.stringify(ranking));
}

// Mostrar ranking salvo
function displayRanking(theme, level){
  const key = `ranking_${theme}_${level}`;
  let ranking = JSON.parse(localStorage.getItem(key)) || [];
  rankingList.innerHTML = '';

  if(ranking.length === 0){
    rankingList.innerHTML = '<li>Sem resultados ainda.</li>';
    return;
  }

  ranking.forEach((entry, idx) => {
    const li = document.createElement('li');
    li.textContent = `${idx + 1}. ${entry.score} pontos - ${entry.date}`;
    rankingList.appendChild(li);
  });
}

// Util - Embaralhar array (Fisher-Yates)
function shuffleArray(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Util - Capitalizar primeira letra
function capitalize(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}
