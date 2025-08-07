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

    // Pergunta 3
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === 'B') score++;

    // Pergunta 4
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === 'A') score++;

    // Pergunta 5
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === 'B') score++;

    // Exibir resultado
    let feedbackMessage = '';
    if (score === 5) {
        feedbackMessage = 'Parabéns! Você acertou todas as perguntas!';
    } else if (score >= 3) {
        feedbackMessage = 'Muito bem! Você acertou algumas perguntas!';
    } else {
        feedbackMessage = 'Tente novamente! Você pode melhorar.';
    }

    document.getElementById('score').textContent = `Você acertou ${score} de 5 perguntas.`;
    document.getElementById('feedback').textContent = feedbackMessage;

    if (score === 5) {
        document.getElementById('feedback').classList.add('correct');
        document.getElementById('feedback').classList.remove('incorrect');
    } else {
        document.getElementById('feedback').classList.add('incorrect');
        document.getElementById('feedback').classList.remove('correct');
    }

    document.getElementById('result').style.display = 'block';
});

// Função para resetar o quiz
function resetQuiz() {
    document.getElementById('quiz-form').reset();
    document.getElementById('result').style.display = 'none';
}