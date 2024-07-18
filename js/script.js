// Array com as perguntas e respostas
const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
        answer: "Brasília"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        answer: "Miguel de Cervantes"
    },

    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

// Função para carregar a próxima pergunta
function loadQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;
    optionsElement.innerHTML = '';

    quizQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        optionsElement.appendChild(button);
        button.addEventListener('click', checkAnswer);
    });
}

// Função para verificar a resposta selecionada
function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score++;
        resultElement.textContent = 'Resposta correta!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Resposta incorreta. A resposta correta é: ' + correctAnswer;
        resultElement.style.color = 'red'
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Função para mostrar o resultado final
function showResults() {
    questionElement.textContent = 'Quiz completo!';
    optionsElement.innerHTML = '';
    resultElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
    submitButton.style.display = 'none';
}

// Carregar a primeira pergunta ao iniciar o quiz
loadQuestion();

// Reiniciar o quiz ao clicar no botão "Next Question"
submitButton.addEventListener('click', () => {
    resultElement.textContent = '';
    loadQuestion();
});
