// JavaScript code for the quiz game
var allQuestions = [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
   {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "George Orwell"
    },
    {
        question: "In which year did World War II end?",
        options: ["1939", "1943", "1945", "1950"],
        correctAnswer: "1945"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Antarctica", "Gobi Desert"],
        correctAnswer: "Antarctica"
    },
    {
        question: "Who painted 'Starry Night'?",
        options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Oxygen", "Carbon Dioxide", "Methane", "Nitrous Oxide"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Thomas Malthus"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Neptune", "Uranus", "Saturn"],
        correctAnswer: "Earth"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        correctAnswer: "Brasília"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Charles Dickens"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "In which year did the first moon landing occur?",
        options: ["1962", "1967", "1969", "1973"],
        correctAnswer: "1969"
    },
    {
        question: "Who is known as the 'Queen of Pop'?",
        options: ["Madonna", "Beyoncé", "Lady Gaga", "Rihanna"],
        correctAnswer: "Madonna"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Africa", "Asia", "Europe", "South America"],
        correctAnswer: "Africa"
    },
     {
        question: "What is the largest bird in the world?",
        options: ["Ostrich", "Emu", "Albatross", "Penguin"],
        correctAnswer: "Ostrich"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Harper Lee"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1989", "1991", "1993"],
        correctAnswer: "1989"
    },
    {
        question: "What is the deepest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who painted the 'Last Supper'?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of China?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        correctAnswer: "Yuan"
    },
    {
        question: "Which gas is known as laughing gas?",
        options: ["Oxygen", "Carbon Dioxide", "Methane", "Nitrous Oxide"],
        correctAnswer: "Nitrous Oxide"
    },
    {
        question: "Who is the author of 'The Origin of Species'?",
        options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Thomas Malthus"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Ag"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        correctAnswer: "1912"
    },
    {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Elvis Presley", "Prince", "David Bowie"],
        correctAnswer: "Michael Jackson"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12"
    },
    {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: "Asia"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sappho", "Aristotle"],
        correctAnswer: "Homer"
    },
    {
        question: "What is the main ingredient in tabbouleh?",
        options: ["Bulgur", "Quinoa", "Couscous", "Rice"],
        correctAnswer: "Bulgur"
    },
    {
        question: "Which river is the longest in South America?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Amazon River"
    },
    {
        question: "Who is the author of 'Brave New World'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "Aldous Huxley"
    },
    {
        question: "In which year did the Russian Revolution take place?",
        options: ["1915", "1917", "1920", "1922"],
        correctAnswer: "1917"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Incheon", "Daegu"],
        correctAnswer: "Seoul"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the currency of Mexico?",
        options: ["Peso", "Euro", "Dollar", "Real"],
        correctAnswer: "Peso"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Gold", "Silver", "Copper"],
        correctAnswer: "Iron"
    },
    {
        question: "In which year did the United States declare its independence?",
        options: ["1773", "1775", "1776", "1780"],
        correctAnswer: "1776"
    },
    {
        question: "Who is known as the 'Queen of Soul'?",
        options: ["Aretha Franklin", "Whitney Houston", "Beyoncé", "Mariah Carey"],
        correctAnswer: "Aretha Franklin"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Earth", "Mercury", "Venus", "Mars"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who wrote 'The Old Man and the Sea'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck"],
        correctAnswer: "Ernest Hemingway"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "K", "Ca", "Mg"],
        correctAnswer: "Na"
    },
    {
        question: "In which country is the Great Barrier Reef located?",
        options: ["Australia", "Brazil", "Mexico", "India"],
        correctAnswer: "Australia"
    },
    {
        question: "Who painted 'The Girl with a Pearl Earring'?",
        options: ["Vermeer", "Rembrandt", "Van Gogh", "Monet"],
        correctAnswer: "Vermeer"
ChatGPT
The code you provided contains 50 questions. Each question is represented as an object with the properties question, options, and correctAnswer. This array of objects is essentially a quiz with 50 questions covering various topics.

User
can you add a question counter that shows what queston the person is on out of the number of questions? // JavaScript code for the quiz game
var allQuestions = [
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
    },
   {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correctAnswer: "Ottawa"
    },
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "George Orwell"
    },
    {
        question: "In which year did World War II end?",
        options: ["1939", "1943", "1945", "1950"],
        correctAnswer: "1945"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Antarctica", "Gobi Desert"],
        correctAnswer: "Antarctica"
    },
    {
        question: "Who painted 'Starry Night'?",
        options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Oxygen", "Carbon Dioxide", "Methane", "Nitrous Oxide"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Thomas Malthus"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Earth", "Neptune", "Uranus", "Saturn"],
        correctAnswer: "Earth"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Brasília", "Rio de Janeiro", "São Paulo", "Buenos Aires"],
        correctAnswer: "Brasília"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Charles Dickens"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "In which year did the first moon landing occur?",
        options: ["1962", "1967", "1969", "1973"],
        correctAnswer: "1969"
    },
    {
        question: "Who is known as the 'Queen of Pop'?",
        options: ["Madonna", "Beyoncé", "Lady Gaga", "Rihanna"],
        correctAnswer: "Madonna"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Africa", "Asia", "Europe", "South America"],
        correctAnswer: "Africa"
    },
     {
        question: "What is the largest bird in the world?",
        options: ["Ostrich", "Emu", "Albatross", "Penguin"],
        correctAnswer: "Ostrich"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        options: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Harper Lee"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "In which year did the Berlin Wall fall?",
        options: ["1987", "1989", "1991", "1993"],
        correctAnswer: "1989"
    },
    {
        question: "What is the deepest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who painted the 'Last Supper'?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the currency of China?",
        options: ["Yuan", "Yen", "Won", "Ringgit"],
        correctAnswer: "Yuan"
    },
    {
        question: "Which gas is known as laughing gas?",
        options: ["Oxygen", "Carbon Dioxide", "Methane", "Nitrous Oxide"],
        correctAnswer: "Nitrous Oxide"
    },
    {
        question: "Who is the author of 'The Origin of Species'?",
        options: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Thomas Malthus"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
        correctAnswer: "Buenos Aires"
    },
    {
        question: "Who wrote 'War and Peace'?",
        options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
        correctAnswer: "Leo Tolstoy"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Ag"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1914", "1916"],
        correctAnswer: "1912"
    },
    {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Elvis Presley", "Prince", "David Bowie"],
        correctAnswer: "Michael Jackson"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12"
    },
    {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: "Asia"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sappho", "Aristotle"],
        correctAnswer: "Homer"
    },
    {
        question: "What is the main ingredient in tabbouleh?",
        options: ["Bulgur", "Quinoa", "Couscous", "Rice"],
        correctAnswer: "Bulgur"
    },
    {
        question: "Which river is the longest in South America?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Amazon River"
    },
    {
        question: "Who is the author of 'Brave New World'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: "Aldous Huxley"
    },
    {
        question: "In which year did the Russian Revolution take place?",
        options: ["1915", "1917", "1920", "1922"],
        correctAnswer: "1917"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Busan", "Incheon", "Daegu"],
        correctAnswer: "Seoul"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the currency of Mexico?",
        options: ["Peso", "Euro", "Dollar", "Real"],
        correctAnswer: "Peso"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Iron", "Gold", "Silver", "Copper"],
        correctAnswer: "Iron"
    },
    {
        question: "In which year did the United States declare its independence?",
        options: ["1773", "1775", "1776", "1780"],
        correctAnswer: "1776"
    },
    {
        question: "Who is known as the 'Queen of Soul'?",
        options: ["Aretha Franklin", "Whitney Houston", "Beyoncé", "Mariah Carey"],
        correctAnswer: "Aretha Franklin"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Earth", "Mercury", "Venus", "Mars"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who wrote 'The Old Man and the Sea'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck"],
        correctAnswer: "Ernest Hemingway"
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "K", "Ca", "Mg"],
        correctAnswer: "Na"
    },
    {
        question: "In which country is the Great Barrier Reef located?",
        options: ["Australia", "Brazil", "Mexico", "India"],
        correctAnswer: "Australia"
    },
    {
        question: "Who painted 'The Girl with a Pearl Earring'?",
        options: ["Vermeer", "Rembrandt", "Van Gogh", "Monet"],
        correctAnswer: "Vermeer"
    },
];

// Function to shuffle the questions array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Shuffle the questions array
shuffleArray(allQuestions);

// Select the first 50 questions for this session
var questions = allQuestions.slice(0, 50);

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsContainer = document.getElementById("options-container");
    var questionCounterElement = document.getElementById("question-counter");

    // Display question number
    questionCounterElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

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
