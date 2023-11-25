// JavaScript code for the quiz game
var questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsContainer = document.getElementById("options-container");

    questionElement.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = ""; // Clear previous options

    questions[currentQuestion].options.forEach(function (option, index) {
        var optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}" id="option${index + 1}">
                                   <label for="option${index + 1}">${option}</label>`;
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        var userAnswer = selectedOption.value;

        if (userAnswer === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }

    } else {
        alert("Please select an option.");
    }
}

function displayResult() {
    var resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}.`;

    // Optionally, you can provide additional feedback or suggest retaking the quiz.
}

// Initial display
displayQuestion();
