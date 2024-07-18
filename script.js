// Array com as perguntas e respostas
const quizData = [
    {
        question: "1. Qual é a capital da França?",
        options: ["Londres", "Berlim", "Madri", "Paris"],
        answer: "Paris"
    },
    {
        question: "2. Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        answer: "Pacífico"
    },
    {
        question: "3. Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "4. Qual é o maior planeta do nosso sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "5. Qual é o país mais populoso do mundo?",
        options: ["Estados Unidos", "Índia", "China", "Indonésia"],
        answer: "China"
    },
    {
        question: "6. Qual é a moeda oficial do Japão?",
        options: ["Yuan", "Yen", "Won", "Dólar"],
        answer: "Yen"
    },
    {
        question: "7. Quem escreveu 'Romeu e Julieta'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "8. Qual é o símbolo químico da água?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "9. Quantos continentes existem no mundo?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "10. Qual é o maior mamífero do mundo?",
        options: ["Elefante", "Baleia-azul", "Hipopótamo", "Rinoceronte"],
        answer: "Baleia-azul"
    },
    {
        question: "11. Qual é o país conhecido como 'Terra do Sol Nascente'?",
        options: ["China", "Coreia do Sul", "Japão", "Tailândia"],
        answer: "Japão"
    },
    {
        question: "12. Qual é o esporte mais popular do mundo?",
        options: ["Basquete", "Críquete", "Tênis", "Futebol"],
        answer: "Futebol"
    },
    {
        question: "13. Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "14. Qual é a língua mais falada no mundo?",
        options: ["Espanhol", "Inglês", "Chinês Mandarim", "Hindi"],
        answer: "Chinês Mandarim"
    },
    {
        question: "15. Qual é a cidade mais populosa do Brasil?",
        options: ["Rio de Janeiro", "Salvador", "Brasília", "São Paulo"],
        answer: "São Paulo"
    }    
      

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
