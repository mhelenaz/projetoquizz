const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-button');
const quizScreen = document.getElementById('quiz-screen');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const resultScreen = document.getElementById('result-screen');
const resultMessage = document.getElementById('result-message');
const rankingList = document.getElementById('ranking-list');
const restartButton = document.getElementById('restart-button');

// Array de perguntas com temas, níveis e respostas
const questions = [
    // Nível Fácil - 15 perguntas
    { theme: 'Geografia', level: 'Fácil', question: 'Qual é a capital do Brasil?', options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte'], answer: 'Brasília' },
    { theme: 'Ciência', level: 'Fácil', question: 'Qual é o planeta mais próximo do Sol?', options: ['Vênus', 'Marte', 'Mercúrio', 'Júpiter'], answer: 'Mercúrio' },
    { theme: 'História', level: 'Fácil', question: 'Quem descobriu o Brasil?', options: ['Vasco da Gama', 'Cristóvão Colombo', 'Pedro Álvares Cabral', 'Fernão de Magalhães'], answer: 'Pedro Álvares Cabral' },
    { theme: 'Esportes', level: 'Fácil', question: 'Quantos jogadores tem um time de futebol em campo?', options: ['9', '10', '11', '12'], answer: '11' },
    { theme: 'Cinema', level: 'Fácil', question: 'Quem é o ator principal do filme "O Poderoso Chefão"?', options: ['Al Pacino', 'Robert De Niro', 'Marlon Brando', 'Jack Nicholson'], answer: 'Marlon Brando' },
    { theme: 'Música', level: 'Fácil', question: 'Qual banda canta a música "Bohemian Rhapsody"?', options: ['The Beatles', 'Queen', 'Led Zeppelin', 'Pink Floyd'], answer: 'Queen' },
    { theme: 'Tecnologia', level: 'Fácil', question: 'Qual a sigla para World Wide Web?', options: ['W3C', 'WWW', 'HTML', 'URL'], answer: 'WWW' },
    { theme: 'Literatura', level: 'Fácil', question: 'Quem escreveu "Dom Quixote"?', options: ['William Shakespeare', 'Miguel de Cervantes', 'Victor Hugo', 'Machado de Assis'], answer: 'Miguel de Cervantes' },
    { theme: 'Arte', level: 'Fácil', question: 'Quem pintou a "Mona Lisa"?', options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], answer: 'Leonardo da Vinci' },
    { theme: 'Animais', level: 'Fácil', question: 'Qual é o maior mamífero do mundo?', options: ['Elefante', 'Baleia Azul', 'Girafa', 'Hipopótamo'], answer: 'Baleia Azul' },
    { theme: 'Mitologia', level: 'Fácil', question: 'Quem é o deus grego dos mares?', options: ['Zeus', 'Hades', 'Poseidon', 'Apolo'], answer: 'Poseidon' },
    { theme: 'Corpo Humano', level: 'Fácil', question: 'Qual é o maior órgão do corpo humano?', options: ['Coração', 'Pulmão', 'Pele', 'Fígado'], answer: 'Pele' },
    { theme: 'Culinária', level: 'Fácil', question: 'Qual é o ingrediente principal do guacamole?', options: ['Tomate', 'Abacate', 'Cebola', 'Pimentão'], answer: 'Abacate' },
    { theme: 'Desenho Animado', level: 'Fácil', question: 'Qual a cor da pele do Homer Simpson?', options: ['Azul', 'Amarelo', 'Verde', 'Branco'], answer: 'Amarelo' },
    { theme: 'Política', level: 'Fácil', question: 'Onde fica a Casa Branca, residência do presidente dos EUA?', options: ['Nova York', 'Los Angeles', 'Washington D.C.', 'Chicago'], answer: 'Washington D.C.' },

    // Nível Médio - 15 perguntas
    { theme: 'Geografia', level: 'Médio', question: 'Qual o maior deserto do mundo?', options: ['Deserto do Saara', 'Deserto do Atacama', 'Deserto da Antártida', 'Deserto da Arábia'], answer: 'Deserto da Antártida' },
    { theme: 'Ciência', level: 'Médio', question: 'Qual a unidade de medida de força?', options: ['Watt', 'Joule', 'Newton', 'Pascal'], answer: 'Newton' },
    { theme: 'História', level: 'Médio', question: 'Em que ano a Revolução Francesa começou?', options: ['1776', '1789', '1804', '1815'], answer: '1789' },
    { theme: 'Esportes', level: 'Médio', question: 'Qual país sediou a Copa do Mundo de 2014?', options: ['África do Sul', 'Rússia', 'Brasil', 'Alemanha'], answer: 'Brasil' },
    { theme: 'Cinema', level: 'Médio', question: 'Qual filme de Quentin Tarantino ganhou o Oscar de Melhor Roteiro Original?', options: ['Kill Bill', 'Bastardos Inglórios', 'Pulp Fiction', 'Django Livre'], answer: 'Pulp Fiction' },
    { theme: 'Música', level: 'Médio', question: 'Qual o instrumento musical mais tocado no mundo?', options: ['Guitarra', 'Piano', 'Violino', 'Bateria'], answer: 'Piano' },
    { theme: 'Tecnologia', level: 'Médio', question: 'Qual linguagem de programação é a base da internet?', options: ['Python', 'Java', 'C++', 'JavaScript'], answer: 'JavaScript' },
    { theme: 'Literatura', level: 'Médio', question: 'Qual o nome do navio do Capitão Ahab, no livro "Moby Dick"?', options: ['Pequod', 'Nau', 'Jolly Roger', 'Black Pearl'], answer: 'Pequod' },
    { theme: 'Arte', level: 'Médio', question: 'Qual movimento artístico é conhecido por usar formas geométricas e cores primárias?', options: ['Impressionismo', 'Expressionismo', 'Cubismo', 'Surrealismo'], answer: 'Cubismo' },
    { theme: 'Animais', level: 'Médio', question: 'Qual animal é o mais rápido do mundo?', options: ['Guepardo', 'Falcão-peregrino', 'Tubarão-mako', 'Leopardo'], answer: 'Falcão-peregrino' },
    { theme: 'Mitologia', level: 'Médio', question: 'Quem é a deusa grega da sabedoria e da guerra estratégica?', options: ['Afrodite', 'Hera', 'Ártemis', 'Atena'], answer: 'Atena' },
    { theme: 'Corpo Humano', level: 'Médio', question: 'Qual o osso mais longo do corpo humano?', options: ['Fíbula', 'Tíbia', 'Fêmur', 'Úmero'], answer: 'Fêmur' },
    { theme: 'Culinária', level: 'Médio', question: 'Qual é o país de origem da pizza?', options: ['França', 'Espanha', 'Itália', 'Grécia'], answer: 'Itália' },
    { theme: 'Desenho Animado', level: 'Médio', question: 'Qual o nome da cidade fictícia onde vivem os "Powerpuff Girls"?', options: ['Metrópolis', 'Cidade de Townsville', 'Gotham City', 'Springfield'], answer: 'Cidade de Townsville' },
    { theme: 'Política', level: 'Médio', question: 'Quem foi o primeiro presidente dos Estados Unidos?', options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'], answer: 'George Washington' },
    
    // Nível Difícil - 15 perguntas
    { theme: 'Geografia', level: 'Difícil', question: 'Qual o único país do mundo que faz fronteira com a Noruega e a Coreia do Norte?', options: ['China', 'Rússia', 'Suécia', 'Finlândia'], answer: 'Rússia' },
    { theme: 'Ciência', level: 'Difícil', question: 'Qual é a maior estrela conhecida do universo?', options: ['Sirius', 'UY Scuti', 'Betelgeuse', 'Stephenson 2-18'], answer: 'Stephenson 2-18' },
    { theme: 'História', level: 'Difícil', question: 'Qual imperador romano dividiu o império em duas partes, a ocidental e a oriental?', options: ['Júlio César', 'Constantino', 'Diocleciano', 'Nero'], answer: 'Diocleciano' },
    { theme: 'Esportes', level: 'Difícil', question: 'Qual é a única equipe da NBA que jogou em 3 cidades diferentes e venceu campeonatos em cada uma?', options: ['Los Angeles Lakers', 'Philadelphia 76ers', 'Golden State Warriors', 'Boston Celtics'], answer: 'Golden State Warriors' },
    { theme: 'Cinema', level: 'Difícil', question: 'Qual o nome do alienígena em "E.T. - O Extraterrestre"?', options: ['Gleedo', 'Zorak', 'E.T.', 'O nome do E.T. nunca é revelado'], answer: 'O nome do E.T. nunca é revelado' },
    { theme: 'Música', level: 'Difícil', question: 'Qual álbum do Radiohead foi lançado inicialmente com um sistema "pague o que quiser"?', options: ['OK Computer', 'The Bends', 'In Rainbows', 'Kid A'], answer: 'In Rainbows' },
    { theme: 'Tecnologia', level: 'Difícil', question: 'Qual é o nome da primeira linguagem de programação orientada a objetos?', options: ['Simula', 'C++', 'Smalltalk', 'Java'], answer: 'Simula' },
    { theme: 'Literatura', level: 'Difícil', question: 'Em "O Senhor dos Anéis", qual o nome da espada de Frodo Bolseiro?', options: ['Andúril', 'Picada', 'Glamdring', 'Narsil'], answer: 'Picada' },
    { theme: 'Arte', level: 'Difícil', question: 'Qual artista é conhecido pela frase "Tudo o que você pode imaginar é real"?', options: ['Pablo Picasso', 'Salvador Dalí', 'Andy Warhol', 'Frida Kahlo'], answer: 'Pablo Picasso' },
    { theme: 'Animais', level: 'Difícil', question: 'Qual é o único mamífero que pode voar de verdade?', options: ['Esquilo voador', 'Morcego', 'Tucano', 'Pterodáctilo'], answer: 'Morcego' },
    { theme: 'Mitologia', level: 'Difícil', question: 'Quem foi a única mulher a sentar no Trono de Ferro em "Game of Thrones"?', options: ['Daenerys Targaryen', 'Cersei Lannister', 'Sansa Stark', 'Margaery Tyrell'], answer: 'Cersei Lannister' },
    { theme: 'Corpo Humano', level: 'Difícil', question: 'Qual é o nome da pequena estrutura responsável por filtrar o sangue nos rins?', options: ['Glomérulo', 'Nefrônio', 'Alvéolo', 'Néfron'], answer: 'Nefrônio' },
    { theme: 'Culinária', level: 'Difícil', question: 'Qual o nome do famoso molho que leva alcaparras, azeitonas e anchovas?', options: ['Molho Pesto', 'Molho Puttanesca', 'Molho Alfredo', 'Molho Bolonhesa'], answer: 'Molho Puttanesca' },
    { theme: 'Desenho Animado', level: 'Difícil', question: 'Em "Rick and Morty", qual o nome da dimensão que eles mais visitam?', options: ['Dimensão C-137', 'Dimensão 42', 'Dimensão 69', 'Dimensão 35-C'], answer: 'Dimensão C-137' },
    { theme: 'Política', level: 'Difícil', question: 'Qual foi o último país a se juntar à União Europeia?', options: ['Croácia', 'Romênia', 'Bulgária', 'Chipre'], answer: 'Croácia' }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectQuestions() {
    currentQuestions = [];
    const themes = [...new Set(questions.map(q => q.theme))];
    const levels = ['Fácil', 'Médio', 'Difícil'];

    themes.forEach(theme => {
        levels.forEach(level => {
            const filtered = questions.filter(q => q.theme === theme && q.level === level);
            shuffleArray(filtered);
            currentQuestions.push(...filtered.slice(0, 5)); // 5 perguntas por tema e nível
        });
    });

    // Garante que o número de perguntas seja 15 no total
    if (currentQuestions.length > 15) {
        currentQuestions = currentQuestions.slice(0, 15);
    }
    
    shuffleArray(currentQuestions);
}

function showQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const questionData = currentQuestions[currentQuestionIndex];
        questionElement.textContent = `(${questionData.theme} - ${questionData.level}) ${questionData.question}`;
        optionsContainer.innerHTML = '';
        shuffleArray(questionData.options);
        
        questionData.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.textContent = option;
            optionElement.classList.add('option');
            optionElement.addEventListener('click', () => selectAnswer(option, questionData.answer));
            optionsContainer.appendChild(optionElement);
        });
        
        scoreElement.textContent = `Pontuação: ${score}`;
    } else {
        endQuiz();
    }
}

function selectAnswer(selectedOption, correctAnswer) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption) {
            option.classList.add('incorrect');
        }
    });

    if (selectedOption === correctAnswer) {
        score += 10;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1000);
}

function endQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    resultMessage.textContent = `Parabéns! Você fez ${score} pontos.`;

    const playerName = prompt("Digite seu nome para o ranking:");
    if (playerName) {
        ranking.push({ name: playerName, score: score });
        ranking.sort((a, b) => b.score - a.score);
        localStorage.setItem('ranking', JSON.stringify(ranking));
    }

    showRanking();
}

function showRanking() {
    rankingList.innerHTML = '';
    ranking.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${player.name} - ${player.score} pontos`;
        rankingList.appendChild(listItem);
    });
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    selectQuestions();
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}

// Event Listeners
startButton.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    selectQuestions();
    showQuestion();
});

restartButton.addEventListener('click', resetGame);

// Inicialização
showRanking();