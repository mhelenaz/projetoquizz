<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Quiz Divertido</title>
    <style>
        /* Estilos CSS para o visual do quiz */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .quiz-container {
            width: 90%;
            max-width: 600px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
        }
        h1 {
            color: #333;
        }
        .question-box {
            margin-bottom: 20px;
        }
        .question-text {
            font-size: 1.5em;
            margin-bottom: 15px;
            color: #555;
        }
        .options-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .option-button {
            background-color: #e9e9e9;
            border: none;
            padding: 15px;
            font-size: 1em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .option-button:hover {
            background-color: #dcdcdc;
        }
        .correct {
            background-color: #a8e6a8 !important;
        }
        .incorrect {
            background-color: #ff9999 !important;
        }
        .score-box {
            font-size: 1.2em;
            margin-top: 20px;
            color: #777;
        }
        .start-button, .difficulty-button {
            background-color: #4CAF50;
            color: white;
            padding: 15px 30px;
            font-size: 1.2em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
        }
        .difficulty-button.easy {
            background-color: #4CAF50;
        }
        .difficulty-button.medium {
            background-color: #FFA500;
        }
        .difficulty-button.hard {
            background-color: #f44336;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="quiz-container">
        <h1>Quiz Divertido</h1>

        <!-- Tela de Boas-vindas -->
        <div id="welcome-screen">
            <p>Bem-vindo ao Quiz Divertido! Prepare-se para testar seus conhecimentos.</p>
            <button class="start-button" onclick="showLevelSelection()">Começar</button>
        </div>

        <!-- Seleção de Nível -->
        <div id="start-screen" class="hidden">
            <p>Escolha um nível para começar:</p>
            <button class="difficulty-button easy" onclick="startGame('easy')">Nível Fácil</button>
            <button class="difficulty-button medium" onclick="startGame('medium')">Nível Médio</button>
            <button class="difficulty-button hard" onclick="startGame('hard')">Nível Difícil</button>
        </div>

        <!-- Tela do Jogo -->
        <div id="game-screen" class="hidden">
            <div class="question-box">
                <p id="question-text" class="question-text"></p>
                <div id="options-container" class="options-container"></div>
            </div>
            <div class="score-box">
                Pontuação: <span id="score">0</span>
            </div>
        </div>

        <!-- Tela de Fim -->
        <div id="end-screen" class="hidden">
            <h2>Fim do Jogo!</h2>
            <p>Sua pontuação final é: <span id="final-score">0</span></p>
            <button class="difficulty-button easy" onclick="startGame('easy')">Jogar Novamente (Fácil)</button>
            <button class="difficulty-button medium" onclick="startGame('medium')">Jogar Novamente (Médio)</button>
            <button class="difficulty-button hard" onclick="startGame('hard')">Jogar Novamente (Difícil)</button>
        </div>
    </div>

    <script>
        // Função para mostrar a seleção de nível ao clicar em "Começar"
        function showLevelSelection() {
            document.getElementById('welcome-screen').classList.add('hidden');
            document.getElementById('start-screen').classList.remove('hidden');
        }

        // Array de perguntas (você pode usar o que já tem no seu código)
        const questionsEasy = [ /* ... seu array ... */ ];
        const questionsMedium = [ /* ... seu array ... */ ];
        const questionsHard = [ /* ... seu array ... */ ];

        let questions;
        let currentQuestionIndex = 0;
        let score = 0;

        const startScreen = document.getElementById('start-screen');
        const gameScreen = document.getElementById('game-screen');
        const endScreen = document.getElementById('end-screen');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const scoreElement = document.getElementById('score');
        const finalScoreElement = document.getElementById('final-score');

        function startGame(level) {
            if (level === 'easy') {
                questions = questionsEasy;
            } else if (level === 'medium') {
                questions = questionsMedium;
            } else {
                questions = questionsHard;
            }
            currentQuestionIndex = 0;
            score = 0;
            scoreElement.textContent = score;
            startScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            endScreen.classList.add('hidden');
            showQuestion();
        }

        function showQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;
            optionsContainer.innerHTML = ''; // Limpa as opções anteriores

            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-button');
                button.onclick = (event) => selectOption(event, option, currentQuestion.answer);
                optionsContainer.appendChild(button);
            });
        }

        function selectOption(event, selectedOption, correctAnswer) {
            const buttons = optionsContainer.querySelectorAll('.option-button');
            buttons.forEach(button => button.disabled = true);

            if (selectedOption === correctAnswer) {
                score++;
                scoreElement.textContent = score;
                event.target.classList.add('correct');
            } else {
                event.target.classList.add('incorrect');
                buttons.forEach(button => {
                    if (button.textContent === correctAnswer) {
                        button.classList.add('correct');
                    }
                });
            }

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    endGame();
                }
            }, 1000);
        }

        function endGame() {
            gameScreen.classList.add('hidden');
            endScreen.classList.remove('hidden');
            finalScoreElement.textContent = score;
        }
    </script>
</body>
</html>