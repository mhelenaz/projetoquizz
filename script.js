// --- Perguntas Exemplo ---
// Você pode expandir para 20 perguntas por tema e nível depois
const QUESTIONS = {
  geografia: {
    facil: [
      {q:"Qual a capital do Brasil?", options:["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], a:"Brasília"},
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
      {q:"Ano do fim da Segunda Guerra Mundial?", options:["1945", "1939", "1918", "1950"], a:"1945"},
      {q:"Primeiro presidente do Brasil?", options:["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Jair Bolsonaro"], a:"Deodoro da Fonseca"},
    ],
    medio: [
      {q:"Quem foi o líder da Revolução Russa de 1917?", options:["Stalin", "Lenin", "Trotsky", "Khrushchev"], a:"Lenin"},
      {q:"Onde ocorreu a Batalha de Waterloo?", options:["França", "Bélgica", "Alemanha", "Inglaterra"], a:"Bélgica"},
      {q:"Ano da queda do muro de Berlim?", options:["1987", "1989", "1991", "1993"], a:"1989"},
    ],
    dificil: [
      {q:"Qual imperador romano governava durante o auge do Império?", options:["Nero", "Augusto", "Calígula", "Trajano"], a:"Trajano"},
      {q:"Quem escreveu 'O Príncipe'?", options:["Maquiavel", "Shakespeare", "Cervantes", "Goethe"], a:"Maquiavel"},
      {q:"Ano da Revolução Francesa?", options:["1789", "1776", "1812", "1848"], a:"1789"},
    ]
  },
  ciencia: {
    facil: [
      {q:"Qual é o planeta mais próximo do Sol?", options:["Terra", "Vênus", "Mercúrio", "Marte"], a:"Mercúrio"},
      {q:"Qual órgão humano filtra o sangue?", options:["Fígado", "Rim", "Coração", "Pulmão"], a:"Rim"},
      {q:"Qual o maior órgão do corpo humano?", options:["Coração", "Fígado", "Pele", "Pulmão"], a:"Pele"},
    ],
    medio: [
      {q:"Velocidade da luz (km/s)?", options:["300000", "150000", "100000", "299792"], a:"299792"},
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

// Variáveis para controle
let currentTheme = '';
let currentLevel = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Referências DOM
const welcomeScreen = document.getElementById('welcome-screen');
const chooseScreen = document.getElementById('choose-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const btnGoToChoose = document.getElementById('btn-go-to-choose');
const btnStartQuiz = document.getElementById('btn-start-quiz');
const btnBackWelcome = document.getElementById('btn-back-welcome');
const nextBtn = document.getElementById('next-btn');
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

// Mostrar só a tela ativa
function showScreen(screen){
  [welcomeScreen, chooseScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// Valida botão iniciar quiz
function validateStartButton(){
  btnStartQuiz.disabled = !(themeSelect.value && levelSelect.value);
}

// Evento botões de navegação
btnGoToChoose.addEventListener('click', () => {
  showScreen(chooseScreen);
});

btnBackWelcome.addEventListener('click', () => {
  showScreen(welcomeScreen);
});

themeSelect.addEventListener('change', validateStartButton);
levelSelect.addEventListener('change', validateStartButton);

// Iniciar quiz
btnStartQuiz.addEventListener('click', () => {
  currentTheme = themeSelect.value;
  currentLevel = levelSelect.value;

  questions = [...QUESTIONS[currentTheme][currentLevel]];
  shuffleArray(questions);

  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = `Pontuação: ${score}`;
  quizTitle.textContent = `Tema: ${capitalize(currentTheme)} | Nível: ${capitalize(currentLevel)}`;

  showScreen(quizScreen);
  showQuestion();
  nextBtn.disabled = true;
});

// Exibir pergunta
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
  nextBtn.disabled = true;
}

// Seleção resposta
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

  nextBtn.disabled = false;
}

// Próxima pergunta ou final
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    finishQuiz();
  }
});

// Finaliza o quiz
function finishQuiz(){
  saveRanking(currentTheme, currentLevel, score);

  finalScoreText.textContent = `Sua pontuação final foi: ${score} pontos.`;
  rankingTitle.textContent = `${capitalize(currentTheme)} - ${capitalize(currentLevel)}`;

  displayRanking(currentTheme, currentLevel);

  showScreen(resultScreen);
}

// Reiniciar quiz
restartBtn.addEventListener('click', () => {
  // Reset selects
  themeSelect.value = '';
  levelSelect.value = '';
  validateStartButton();
  showScreen(welcomeScreen);
});

// Ranking no localStorage
function saveRanking(theme, level, score){
  const key = `ranking_${theme}_${level}`;
  let ranking = JSON.parse(localStorage.getItem(key)) || [];
  const now = new Date().toLocaleDateString();

  ranking.push({score, date: now});
  ranking.sort((a,b) => b.score - a.score);
  ranking = ranking.slice(0, 10);

  localStorage.setItem(key, JSON.stringify(ranking));
}

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
    li.textContent = `${idx+1}. ${entry.score} pontos - ${entry.date}`;
    rankingList.appendChild(li);
  });
}

// Função utilitária para embaralhar array (Fisher-Yates)
function shuffleArray(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Capitalizar primeira letra
function capitalize(text){
  return text.charAt(0).toUpperCase() + text.slice(1);
}
