// Perguntas para os níveis fácil, médio e difícil
const questionsEasy = [
    { question: "Qual é a capital da França?", options: ["Berlim", "Madri", "Paris", "Roma"], answer: "Paris" },
    { question: "Qual o maior planeta do nosso sistema solar?", options: ["Vênus", "Júpiter", "Marte", "Terra"], answer: "Júpiter" },
    { question: "Quem pintou a Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: "Da Vinci" },
    { question: "Qual o animal mais rápido do mundo?", options: ["Leão", "Guepardo", "Falcão-peregrino", "Cavalo"], answer: "Falcão-peregrino" },
    { question: "Qual é a capital do Japão?", options: ["Seul", "Pequim", "Bangkok", "Tóquio"], answer: "Tóquio" },
    { question: "Em que país fica a Torre de Pisa?", options: ["França", "Itália", "Alemanha", "Espanha"], answer: "Itália" },
    { question: "Quantos ossos tem um esqueleto humano adulto?", options: ["206", "210", "198", "200"], answer: "206" },
    { question: "Qual o maior oceano da Terra?", options: ["Atlântico", "Índico", "Ártico", "Pacífico"], answer: "Pacífico" },
    { question: "Quem descobriu o Brasil?", options: ["Vasco da Gama", "Pedro Álvares Cabral", "Fernão de Magalhães", "Cristóvão Colombo"], answer: "Pedro Álvares Cabral" },
    { question: "Qual o metal líquido à temperatura ambiente?", options: ["Ferro", "Ouro", "Mercúrio", "Alumínio"], answer: "Mercúrio" }
];

const questionsMedium = [
    { question: "Qual é o rio mais longo do mundo?", options: ["Rio Nilo", "Rio Amazonas", "Rio Yangtze", "Rio Mississipi"], answer: "Rio Amazonas" },
    { question: "Quem escreveu a obra 'O Pequeno Príncipe'?", options: ["Antoine de Saint-Exupéry", "Victor Hugo", "Lewis Carroll", "J.K. Rowling"], answer: "Antoine de Saint-Exupéry" },
    { question: "Qual o nome da montanha mais alta do mundo?", options: ["Monte Everest", "K2", "Monte Kilimanjaro", "Monte Fuji"], answer: "Monte Everest" },
    { question: "Quantos corações tem um polvo?", options: ["Um", "Dois", "Três", "Quatro"], answer: "Três" },
    { question: "Em que ano a Revolução Francesa começou?", options: ["1789", "1776", "1815", "1914"], answer: "1789" },
    { question: "Qual o nome da capital da Austrália?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "Quem foi o compositor da 'Nona Sinfonia'?", options: ["Mozart", "Beethoven", "Bach", "Vivaldi"], answer: "Beethoven" },
    { question: "Qual o principal componente da atmosfera de Vênus?", options: ["Nitrogênio", "Oxigênio", "Dióxido de carbono", "Hidrogênio"], answer: "Dióxido de carbono" },
    { question: "Qual o país com a maior população do mundo?", options: ["Índia", "China", "Estados Unidos", "Brasil"], answer: "Índia" },
    { question: "Qual o nome do inventor da lâmpada incandescente?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"], answer: "Thomas Edison" }
];

const questionsHard = [
    { question: "Quem formulou a Teoria da Relatividade Geral?", options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"], answer: "Albert Einstein" },
    { question: "Em que ano a Batalha de Hastings ocorreu?", options: ["1066", "1492", "1776", "1815"], answer: "1066" },
    { question: "Qual é a massa atômica aproximada do Ouro (Au)?", options: ["197", "108", "79", "39"], answer: "197" },
    { question: "Quem foi o líder da Revolução Haitiana?", options: ["Toussaint Louverture", "Jean-Jacques Dessalines", "François Duvalier", "Henri Christophe"], answer: "Toussaint Louverture" },
    { question: "Qual o teorema matemático que afirma que 'a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa'?", options: ["Teorema de Tales", "Teorema de Pitágoras", "Teorema de Fermat", "Teorema de Euclides"], answer: "Teorema de Pitágoras" },
    { question: "Qual foi o último país a se tornar membro da ONU?", options: ["Timor-Leste", "Montenegro", "Sudão do Sul", "Sérvia"], answer: "Sudão do Sul" },
    { question: "O processo de conversão de luz em energia química em plantas é conhecido como:", options: ["Respiração celular", "Fotossíntese", "Transpiração", "Fermentação"], answer: "Fotossíntese" },
    { question: "Em que cidade o Tratado de Tordesilhas foi assinado?", options: ["Lisboa", "Tordesilhas", "Madri", "Sevilha"], answer: "Tordesilhas" },
    { question: "Qual o único mamífero que pode voar?", options: ["Morcego", "Pterossauro", "Esquilo-voador", "Pato"], answer: "Morcego" },
    { question: "Qual é o nome do criador da linguagem de programação Python?", options: ["Linus Torvalds", "James Gosling", "Guido van Rossum", "Bill Gates"], answer: "Guido van Rossum" }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');

document.querySelectorAll('.difficulty-button').forEach(button => {
    button.addEventListener('click', () => {
        const level = button.dataset.level;
        startGame(level);
    });
});

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
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(option, currentQuestion.answer, button));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption, correctAnswer, selectedButton) {
    // Desabilita todos os botões de opção
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        score++;
        scoreElement.textContent = score;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        // Destaca a resposta correta
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
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;
}

// --- NOVO: Controle da tela de boas-vindas ---
const welcomeScreen = document.getElementById('welcome-screen');
const startBtn = document.getElementById('start-btn');

// Começa com a tela de seleção de nível escondida, só mostra a de boas-vindas
startScreen.classList.add('hidden');

startBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';  // esconde boas-vindas
    startScreen.classList.remove('hidden'); // mostra seleção de nível
});

