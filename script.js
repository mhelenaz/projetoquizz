let score = 0;
let currentQuestionIndex = 0;
let theme = '';
let level = 'Fácil';
let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

const questions = {
  "Geral": [
    {
      question: "Qual é a capital do Brasil?",
      answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
      correctAnswer: "Brasília",
      level: "Fácil"
    },
    {
      question: "Quem escreveu 'Dom Quixote'?",
      answers: ["Shakespeare", "Cervantes", "Dante", "Goethe"],
      correctAnswer: "Cervantes",
      level: "Médio"
    },
    {
      question: "Em que ano o homem chegou à Lua?",
      answers: ["1965", "1969", "1972", "1959"],
      correctAnswer: "1969",
      level: "Difícil"
    }
  ],
  "Ciência": [
    {
      question: "Qual é o elemento químico com símbolo O?",
      answers: ["Ouro", "Oxigênio", "Osmium", "Ósmio"],
      correctAnswer: "Oxigênio",
      level: "Fácil"
    },
    {
      question: "O que é a fotossíntese?",
      answers: ["Processo de respiração", "Conversão de luz em energia", "Transformação de energia térmica", "Conversão de água em vapor"],
      correctAnswer: "Conversão de luz em energia",
      level: "Médio"
    },
    {
      question: "Qual é a fórmula da gravidade de Newton?",
      answers: ["F = ma", "F = G(m1m2)/r^2", "E = mc²", "F = v²/r"],
      correctAnswer: "F = G(m1m2)/r^2",
      level: "Difícil"
    }
  ]
};

function startQuiz() {
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  
  // Escolher tema
  theme = prompt("Escolha um tema: Geral, Ciência");
  while (!questions[theme]) {
    theme = prompt("Tema inválido. Escolha novamente: Geral, Ciência");
  }
  
  // Escolher nível de dificuldade
  level = prompt("Escolha o nível: Fácil, Médio, Difícil");
  level = level.charAt(0).toUpperCase() + level.slice(1);  // Capitaliza a primeira letra
  
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[theme].filter(q => q.level === level)[currentQuestionIndex];
  
  if (!currentQuestion) {
    endQuiz();
    return;
  }

  document.getElementById("question").innerText = currentQuestion.question;
  const answersElement = document.getElementById("answers");
  answersElement.innerHTML = '';

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.onclick = () => checkAnswer(answer);
    answersElement.appendChild(button);
  });

  document.getElementById("next-button").style.display = 'none';
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[theme].filter(q => q.level === level)[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score += 10;
  }

  document.getElementById("score").innerText = `Pontuação: ${score}`;
  document.getElementById("level").innerText = `Nível: ${level}`;
  document.getElementById("theme").innerText = `Tema: ${theme}`;
  
  document.getElementById("next-button").style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}

function endQuiz() {
  // Salvar ranking
  const playerName = prompt("Digite seu nome para o ranking:");
  ranking.push({ name: playerName, score: score });
  ranking = ranking.sort((a, b) => b.score - a.score);
  
  localStorage.setItem('ranking', JSON.stringify(ranking));
  
  // Exibir ranking
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("ranking-screen").style.display = "block";
  
  const rankingList = document.getElementById("ranking-list");
  rankingList.innerHTML = '';
  ranking.slice(0, 5).forEach((entry, index) => {
    const div = document.createElement('div');
    div.innerText = `${index + 1}. ${entry.name} - ${entry.score} pontos`;
    rankingList.appendChild(div);
  });
}

function restartQuiz() {
  document.getElementById("ranking-screen").style.display = "none";
  document.getElementById("welcome-screen").style.display = "block";
}
