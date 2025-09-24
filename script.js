// Mantém todo o código anterior intacto, só adiciona o progresso e loading

// Criar barra de progresso dinamicamente
const quizScreenHeader = quizScreen.querySelector('header');

const progressBar = document.createElement('div');
progressBar.id = 'progress-bar';
progressBar.innerHTML = '<div id="progress-bar-fill"></div>';
quizScreenHeader.appendChild(progressBar);

const progressBarFill = document.getElementById('progress-bar-fill');

// Modifica a função showQuestion para atualizar barra e animação
function showQuestion(){
  clearAnswers();
  const currentQ = questions[currentQuestionIndex];

  questionText.textContent = '';
  // Animação loading texto da pergunta
  let loadingDots = 0;
  const loadingInterval = setInterval(() => {
    questionText.textContent = 'Carregando pergunta' + '.'.repeat(loadingDots);
    loadingDots = (loadingDots + 1) % 4;
  }, 400);

  setTimeout(() => {
    clearInterval(loadingInterval);
    questionText.textContent = currentQ.q;
    currentQ.options.forEach(option => {
      const btn = document.createElement('button');
      btn.classList.add('answer-btn');
      btn.textContent = option;
      btn.addEventListener('click', () => selectAnswer(btn, currentQ.a));
      answersContainer.appendChild(btn);
    });
  }, 1200);

  // Atualiza barra de progresso
  const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;

  nextBtn.disabled = true;
}

// Quando chegar na última pergunta, barra cheia
function finishQuiz(){
  progressBarFill.style.width = '100%';
  saveRanking(currentTheme, currentLevel, score);

  finalScoreText.textContent = `Sua pontuação final foi: ${score} pontos.`;
  rankingTitle.textContent = `${capitalize(currentTheme)} - ${capitalize(currentLevel)}`;

  displayRanking(currentTheme, currentLevel);

  showScreen(resultScreen);
}
