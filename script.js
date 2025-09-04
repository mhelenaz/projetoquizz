// script.js

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correctAnswer: "Brasília"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Juscelino Kubitschek", "Marechal Deodoro da Fonseca", "Tancredo Neves"],
        correctAnswer: "Marechal Deodoro da Fonseca"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Girafa", "Elefante", "Hipopótamo", "Urso"],
        correctAnswer: "Elefante"
    },
    {
        question: "Qual planeta é conhecido como o 'planeta vermelho'?",
        options: ["Marte", "Vênus", "Júpiter", "Saturno"],
        correctAnswer: "Marte"
    },
    {
        question: "Qual é a língua mais falada no mundo?",
        options: ["Espanhol", "Mandarim", "Inglês", "Árabe"],
        correctAnswer: "Mandarim"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

function startQuiz() {
    // Hide the start screen and show the quiz screen with animation
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Add animation to the container
    document.querySelector('.container').classList.add('animate');

    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-container').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Limpar opções anteriores

    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="answer" value="${option}"> ${option}
        `;
        optionsContainer.appendChild(label);
    });

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
