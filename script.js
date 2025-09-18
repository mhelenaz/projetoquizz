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
        },
        {
            question: "Quem pintou a Mona Lisa?",
            answers: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"],
            correctAnswer: "Da Vinci",
            level: "Fácil"
        },
        {
            question: "Qual o maior continente?",
            answers: ["África", "América", "Ásia", "Europa"],
            correctAnswer: "Ásia",
            level: "Médio"
        },
        {
            question: "Quem é o atual presidente dos Estados Unidos?",
            answers: ["Barack Obama", "Donald Trump", "Joe Biden", "George Bush"],
            correctAnswer: "Joe Biden",
            level: "Fácil"
        },
        {
            question: "Qual é o maior país do mundo em termos de área?",
            answers: ["China", "Rússia", "Canadá", "Brasil"],
            correctAnswer: "Rússia",
            level: "Médio"
        },
        {
            question: "Em qual continente o Egito está localizado?",
            answers: ["África", "Ásia", "Europa", "América"],
            correctAnswer: "África",
            level: "Fácil"
        },
        {
            question: "Quem descobriu a América?",
            answers: ["Cristóvão Colombo", "Marco Polo", "Vasco da Gama", "Pedro Álvares Cabral"],
            correctAnswer: "Cristóvão Colombo",
            level: "Fácil"
        },
        {
            question: "Qual é o nome do famoso muro na Alemanha?",
            answers: ["Muro de Berlim", "Muro de Roma", "Muro de Paris", "Muro de Londres"],
            correctAnswer: "Muro de Berlim",
            level: "Médio"
        },
        {
            question: "Em qual ano começou a Segunda Guerra Mundial?",
            answers: ["1935", "1940", "1939", "1914"],
            correctAnswer: "1939",
            level: "Difícil"
        },
        {
            question: "Qual é o nome da maior floresta tropical do mundo?",
            answers: ["Floresta do Congo", "Floresta Amazônica", "Floresta de Borneo", "Floresta de Taiga"],
            correctAnswer: "Floresta Amazônica",
            level: "Fácil"
        },
        {
            question: "Qual é o maior oceano do planeta?",
            answers: ["Atlântico", "Índico", "Pacífico", "Ártico"],
            correctAnswer: "Pacífico",
            level: "Médio"
        },
        {
            question: "Quantos estados tem o Brasil?",
            answers: ["26", "27", "25", "28"],
            correctAnswer: "26",
            level: "Fácil"
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
            question: "Quem é conhecido como o pai da física?",
            answers: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
            correctAnswer: "Isaac Newton",
            level: "Médio"
        },
        {
            question: "O que é a fotossíntese?",
            answers: ["Processo de respiração", "Conversão de luz em energia", "Transformação de energia térmica", "Conversão de água em vapor"],
            correctAnswer: "Conversão de luz em energia",
            level: "Médio"
        },
        {
            question: "Qual a fórmula da água?",
            answers: ["H2O", "O2", "CO2", "H2SO4"],
            correctAnswer: "H2O",
            level: "Fácil"
        },
        {
            question: "Qual é a fórmula da gravidade de Newton?",
            answers: ["F = ma", "F = G(m1m2)/r^2",
