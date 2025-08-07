// script.js

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;

    // Pergunta 1
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'C') score++;

    // Pergunta 2
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'C') score++;

    // Exibir resultado
    document.getElementById('score').textContent = `Você acertou ${score} de 2 perguntas.`;
    document.getElementById('result').style.display = 'block';
});