// Objeto com perguntas organizadas por tema e nível
const questions = {
    portugues: {
        easy: [
            { question: "Qual a classe gramatical da palavra 'rapidamente'?", options: ["Adjetivo", "Substantivo", "Advérbio", "Verbo"], answer: "Advérbio" },
            { question: "Qual é o plural de 'pão-de-ló'?", options: ["Pães-de-lós", "Pães-de-ló", "Pão-de-lós", "Pães-de-lós"], answer: "Pães-de-ló" },
            { question: "Qual o autor da obra 'O Cortiço'?", options: ["Machado de Assis", "José de Alencar", "Álvares de Azevedo", "Aluísio Azevedo"], answer: "Aluísio Azevedo" },
            { question: "A palavra 'chá' é um substantivo...?", options: ["Primitivo", "Composto", "Derivado", "Coletivo"], answer: "Primitivo" },
            { question: "Qual das seguintes palavras é paroxítona?", options: ["Sabiá", "Lâmpada", "Palavra", "Abacaxi"], answer: "Palavra" },
            { question: "Qual o significado da palavra 'efêmero'?", options: ["Duradouro", "Fugaz", "Eterno", "Lento"], answer: "Fugaz" },
            { question: "Qual das palavras é um substantivo coletivo para 'livros'?", options: ["Resma", "Penca", "Atlas", "Biblioteca"], answer: "Biblioteca" },
            { question: "Qual o autor da obra 'Dom Casmurro'?", options: ["José de Alencar", "Machado de Assis", "Eça de Queirós", "Jorge Amado"], answer: "Machado de Assis" },
            { question: "Qual a alternativa com a palavra grafada corretamente?", options: ["Exceção", "Esceção", "Exscessão", "Essceção"], answer: "Exceção" },
            { question: "A palavra 'geladeira' é formada por qual processo?", options: ["Composição", "Derivação prefixal", "Derivação sufixal", "Derivação regressiva"], answer: "Derivação sufixal" }
        ],
        medium: [
            { question: "Em qual verso do soneto de Camões 'Amor é fogo que arde sem se ver...' está a figura de linguagem 'paradoxo'?", options: ["...é ferida que dói e não se sente;", "...é um contentamento descontente;", "...é ter com quem nos ama a lealdade.", "...é cuidar que se ganha em se perder;"], answer: "...é um contentamento descontente;" },
            { question: "Qual é a figura de linguagem presente em 'O carro bebia o asfalto'?", options: ["Metáfora", "Eufemismo", "Hipérbole", "Prosopopeia"], answer: "Prosopopeia" },
            { question: "O verbo 'ir' pertence a qual conjugação?", options: ["Primeira", "Segunda", "Terceira", "Irregular"], answer: "Terceira" },
            { question: "Qual a obra literária que narra as aventuras de Macunaíma?", options: ["Memórias Póstumas de Brás Cubas", "O Guarani", "Macunaíma", "Vidas Secas"], answer: "Macunaíma" },
            { question: "O que é um pleonasmo?", options: ["Repetição de ideias", "Uso de uma palavra no lugar de outra", "Exagero intencional", "Atenuação de uma ideia"], answer: "Repetição de ideias" }
        ],
        hard: [
            { question: "Qual é a função do 'se' na frase 'João se machucou'?", options: ["Conjunção", "Partícula expletiva", "Índice de indeterminação do sujeito", "Partícula apassivadora"], answer: "Partícula apassivadora" },
            { question: "Em qual oração o verbo 'haver' está no sentido de 'existir'?", options: ["Haverá festas.", "Ele havia estudado.", "Havia de ser feliz.", "Havia tempo para tudo."], answer: "Haverá festas." },
            { question: "Qual das frases é um exemplo de metonímia?", options: ["Ele comeu a caixa de bombons.", "O sol ria.", "O mar chorava.", "Sua boca é um túmulo."], answer: "Ele comeu a caixa de bombons." },
            { question: "Qual o nome da principal figura de linguagem de 'O fogo está furioso'?", options: ["Eufemismo", "Personificação", "Antítese", "Comparação"], answer: "Personificação" },
            { question: "A frase 'O Brasil, país de cores, é lindo.' utiliza qual figura de sintaxe?", options: ["Elipse", "Zeugma", "Anacoluto", "Aposto"], answer: "Aposto" }
        ]
    },
    matematica: {
        easy: [
            { question: "Quanto é 7 x 9?", options: ["56", "63", "72", "64"], answer: "63" },
            { question: "Qual o valor de pi (π) com duas casas decimais?", options: ["3,12", "3,14", "3,16", "3,10"], answer: "3,14" },
            { question: "Quanto é a raiz quadrada de 144?", options: ["10", "12", "14", "16"], answer: "12" },
            { question: "Qual o resultado de 150 dividido por 3?", options: ["50", "45", "30", "60"], answer: "50" },
            { question: "Qual o próximo número na sequência: 2, 4, 8, 16, ...?", options: ["20", "24", "32", "36"], answer: "32" },
            { question: "Qual é o perímetro de um quadrado com lado de 7 cm?", options: ["14 cm", "28 cm", "49 cm", "21 cm"], answer: "28 cm" },
            { question: "Quanto é 25% de 200?", options: ["25", "50", "75", "100"], answer: "50" },
            { question: "Se x + 5 = 12, qual o valor de x?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "Qual o resultado de (-5) x (-4)?", options: ["-20", "-9", "1", "20"], answer: "20" },
            { question: "Quantos segundos há em 1 hora?", options: ["600", "3600", "1200", "2400"], answer: "3600" }
        ],
        medium: [
            { question: "Se um triângulo tem lados de 3, 4 e 5, qual é a sua área?", options: ["10", "6", "12", "15"], answer: "6" },
            { question: "Qual o valor de 2³ + 3²?", options: ["17", "13", "15", "11"], answer: "17" },
            { question: "Qual a soma dos ângulos internos de um triângulo?", options: ["90º", "180º", "270º", "360º"], answer: "180º" },
            { question: "Qual a área de um círculo com raio de 2 cm? (π = 3,14)", options: ["12,56 cm²", "6,28 cm²", "3,14 cm²", "4 cm²"], answer: "12,56 cm²" },
            { question: "Qual o resultado de 0,5 + 0,25?", options: ["0,7", "0,75", "0,525", "0,8"], answer: "0,75" }
        ],
        hard: [
            { question: "Qual o valor de 10! (fatorial de 10)?", options: ["1.000.000", "3.628.800", "10.000", "720"], answer: "3.628.800" },
            { question: "Qual o volume de um cubo com aresta de 3 cm?", options: ["9 cm³", "12 cm³", "27 cm³", "36 cm³"], answer: "27 cm³" },
            { question: "Se a² = 81, qual o valor de a?", options: ["9", "9 e -9", "-9", "3 e -3"], answer: "9 e -9" },
            { question: "Qual o número primo que vem depois do 7?", options: ["8", "9", "11", "13"], answer: "11" },
            { question: "Qual o resultado de 100 - (20 + 5) * 2?", options: ["150", "50", "30", "80"], answer: "50" }
        ]
    },
    historia: {
        easy: [
            { question: "Em que ano o Brasil se tornou independente?", options: ["1822", "1889", "1500", "1789"], answer: "1822" },
            { question: "Qual foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Floriano Peixoto"], answer: "Deodoro da Fonseca" },
            { question: "Quem foi o líder da Revolução Cubana?", options: ["Fidel Castro", "Che Guevara", "Raúl Castro", "José Martí"], answer: "Fidel Castro" },
            { question: "Em que ano a Segunda Guerra Mundial terminou?", options: ["1942", "1945", "1950", "1939"], answer: "1945" },
            { question: "Qual império construiu o Coliseu em Roma?", options: ["Império Grego", "Império Egípcio", "Império Romano", "Império Persa"], answer: "Império Romano" },
            { question: "Quem foi o primeiro imperador do Brasil?", options: ["Dom Pedro I", "Dom Pedro II", "Princesa Isabel", "Marechal Deodoro"], answer: "Dom Pedro I" },
            { question: "Em que cidade o Tratado de Versalhes foi assinado?", options: ["Paris", "Londres", "Genebra", "Berlim"], answer: "Paris" },
            { question: "O Renascimento teve sua origem em qual país?", options: ["Espanha", "Itália", "França", "Alemanha"], answer: "Itália" },
            { question: "O descobrimento da América é atribuído a qual navegador?", options: ["Vasco da Gama", "Pedro Álvares Cabral", "Fernão de Magalhães", "Cristóvão Colombo"], answer: "Cristóvão Colombo" },
            { question: "A Revolução Industrial teve início em qual país?", options: ["França", "Estados Unidos", "Inglaterra", "Alemanha"], answer: "Inglaterra" }
        ],
        medium: [
            { question: "Qual evento marcou o início da Primeira Guerra Mundial?", options: ["Ataque a Pearl Harbor", "Invasão da Polônia", "Assassínio do Arquiduque Francisco Ferdinando", "Revolução Russa"], answer: "Assassínio do Arquiduque Francisco Ferdinando" },
            { question: "Qual o principal objetivo da Inconfidência Mineira?", options: ["Abolir a escravidão", "Estabelecer uma monarquia", "Separar Minas Gerais do Brasil", "Libertar o Brasil do domínio português"], answer: "Libertar o Brasil do domínio português" },
            { question: "Em qual ano a Muro de Berlim caiu?", options: ["1989", "1991", "1985", "1990"], answer: "1989" },
            { question: "Quem foi o líder do movimento de libertação indiano?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Subhas Chandra Bose"], answer: "Mahatma Gandhi" },
            { question: "Qual foi o período da história brasileira em que Getúlio Vargas governou?", options: ["República Velha", "Estado Novo", "República da Espada", "Governo Militar"], answer: "Estado Novo" }
        ],
        hard: [
            { question: "A Guerra Fria foi um conflito entre quais duas potências?", options: ["Reino Unido e Alemanha", "EUA e União Soviética", "França e Rússia", "China e Japão"], answer: "EUA e União Soviética" },
            { question: "Qual foi a 'capital do Brasil' antes de Brasília?", options: ["São Paulo", "Rio de Janeiro", "Salvador", "Belo Horizonte"], answer: "Rio de Janeiro" },
            { question: "Quem foi o último czar da Rússia?", options: ["Ivan, o Terrível", "Pedro, o Grande", "Nicolau II", "Vladimir Lenin"], answer: "Nicolau II" },
            { question: "Quem foi a primeira mulher a governar o Brasil?", options: ["Princesa Isabel", "Dilma Rousseff", "Dona Leopoldina", "Dona Maria I"], answer: "Dilma Rousseff" },
            { question: "Qual é o nome do ditador alemão que liderou o Terceiro Reich?", options: ["Otto von Bismarck", "Benito Mussolini", "Adolf Hitler", "Joseph Stalin"], answer: "Adolf Hitler" }
        ]
    },
    ciencias: {
        easy: [
            { question: "Qual é a fórmula química da água?", options: ["H₂O₂", "CO₂", "NaCl", "H₂O"], answer: "H₂O" },
            { question: "Qual o maior órgão do corpo humano?", options: ["Coração", "Fígado", "Pele", "Cérebro"], answer: "Pele" },
            { question: "Onde o processo de fotossíntese ocorre em uma planta?", options: ["Raiz", "Folha", "Caule", "Flor"], answer: "Folha" },
            { question: "Qual planeta é conhecido como 'Planeta Vermelho'?", options: ["Vênus", "Júpiter", "Marte", "Urano"], answer: "Marte" },
            { question: "Qual o nome do gás que os humanos inalam para respirar?", options: ["Gás carbônico", "Oxigênio", "Hidrogênio", "Nitrogênio"], answer: "Oxigênio" },
            { question: "Qual o nome da ciência que estuda os animais?", options: ["Botânica", "Geologia", "Zoologia", "Ecologia"], answer: "Zoologia" },
            { question: "Qual a força que nos mantém presos à Terra?", options: ["Eletromagnetismo", "Força nuclear", "Gravidade", "Força de atrito"], answer: "Gravidade" },
            { question: "Qual a menor partícula de um elemento?", options: ["Molécula", "Célula", "Átomo", "Próton"], answer: "Átomo" },
            { question: "Qual o nome do processo em que a água líquida se transforma em vapor?", options: ["Condensação", "Fusão", "Solidificação", "Evaporação"], answer: "Evaporação" },
            { question: "A unidade básica e funcional da vida é a...", options: ["Molécula", "Átomo", "Célula", "Tecido"], answer: "Célula" }
        ],
        medium: [
            { question: "Qual a capital mundial do mergulho?", options: ["Curaçao", "Aruba", "Noronha", "Fernando de Noronha"], answer: "Fernando de Noronha" },
            { question: "Onde o alimento é digerido e os nutrientes são absorvidos?", options: ["Estômago", "Intestino grosso", "Intestino delgado", "Esôfago"], answer: "Intestino delgado" },
            { question: "Em qual estado físico a água se encontra a 100°C ao nível do mar?", options: ["Sólido", "Líquido", "Gasoso", "Plasma"], answer: "Gasoso" },
            { question: "Qual a principal fonte de energia para a Terra?", options: ["Lua", "Estrelas", "Sol", "Ventos"], answer: "Sol" },
            { question: "Qual das seguintes estruturas não faz parte de uma célula animal?", options: ["Membrana plasmática", "Parede celular", "Núcleo", "Mitocôndria"], answer: "Parede celular" }
        ],
        hard: [
            { question: "Qual é o principal componente do ar que respiramos?", options: ["Oxigênio", "Dióxido de carbono", "Nitrogênio", "Argônio"], answer: "Nitrogênio" },
            { question: "Qual é o maior mamífero do mundo?", options: ["Elefante", "Baleia-azul", "Girafa", "Rinoceronte"], answer: "Baleia-azul" },
            { question: "Qual o nome do fenômeno em que as plantas produzem seu próprio alimento?", options: ["Respiração", "Transpiração", "Fotossíntese", "Fermentação"], answer: "Fotossíntese" },
            { question: "Qual osso protege o cérebro?", options: ["Fêmur", "Tíbia", "Crânio", "Costela"], answer: "Crânio" },
            { question: "Em que parte do corpo humano o sangue é purificado?", options: ["Coração", "Pulmões", "Rins", "Fígado"], answer: "Pulmões" }
        ]
    }
};

let questionsList; // Variável que armazenará a lista de perguntas do nível e tema escolhidos
let currentQuestionIndex = 0;
let score = 0;
let selectedTheme = '';

const welcomeScreen = document.getElementById('welcome-screen');
const themeScreen = document.getElementById('theme-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');

// Função para mostrar a tela de seleção de tema
function showThemeScreen() {
    welcomeScreen.classList.add('hidden');
    difficultyScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    themeScreen.classList.remove('hidden');
}

// Função para mostrar a tela de seleção de nível
function showDifficultyScreen(theme) {
    selectedTheme = theme;
    themeScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
}

// Função para começar o jogo com o nível escolhido
function startGame(level) {
    questionsList = questions[selectedTheme][level];
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    difficultyScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    showQuestion();
}

// Função para exibir a pergunta e suas opções
function showQuestion() {
    const currentQuestion = questionsList[currentQuestionIndex];
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

// Função chamada quando uma opção é selecionada
function selectOption(event, selectedOption, correctAnswer) {
    const buttons = optionsContainer.querySelectorAll('.option-button');
    buttons.forEach(button => button.disabled = true); // Desabilita todos os botões

    if (selectedOption === correctAnswer) {
        score++;
        scoreElement.textContent = score;
        event.target.classList.add('correct');
    } else {
        event.target.classList.add('incorrect');
        // Encontra e destaca a resposta correta
        buttons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionsList.length) {
            showQuestion();
        } else {
            endGame();
        }
    }, 1000); // Espera 1 segundo antes de ir para a próxima pergunta
}

// Função para terminar o jogo
function endGame() {
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;
}