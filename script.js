let score = 0;
let currentQuestionIndex = 0;
let theme = '';
let level = '';
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
            question: "Quem pintou a Mona Lisa?",
            answers: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"],
            correctAnswer: "Da Vinci",
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
            question: "Quem é conhecido como o pai da física moderna?",
            answers: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
            correctAnswer: "Albert Einstein",
            level: "Médio"
        },
        {
            question: "O que é a fotossíntese?",
            answers: ["Processo de respiração", "Conversão de luz em energia", "Transformação de energia térmica", "Conversão de água em vapor"],
            correctAnswer: "Conversão de luz em energia",
            level: "Difícil"
        }
    ],
    "Geografia": [
        {
            question: "Qual é o maior continente?",
            answers: ["África", "América", "Ásia", "Europa"],
            correctAnswer: "Ásia",
            level: "Fácil"
        },
        {
            question: "Quantos estados tem o Brasil?",
            answers: ["26", "27", "25", "28"],
            correctAnswer: "26",
            level: "Médio"
        },
        {
            question: "Qual é o maior país do mundo em termos de área?",
            answers: ["China", "Rússia", "Canadá", "Brasil"],
            correctAnswer: "Rússia",
            level: "Difícil"
        }
    ]
};

function showThemeSelection() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("theme-screen").style.display = "block";
}

function startQuiz() {
    theme = document.getElementById("theme-select").value;
    level = document.getElementById("level-select").value;
    
    document.getElementById("theme-text").innerText = theme;
    document.getElementById("level-text").innerText = level;
    
    document.getElementById("theme-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestions = questions[theme].filter(q => q.level === level);
    const currentQuestion = currentQuestions[currentQuestionIndex];

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

function checkAnswer(selected
