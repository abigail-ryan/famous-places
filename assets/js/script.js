// Questions array
const questions = [
    {
        image : "assets/images/abu-simbel-temples-egypt.jpg",
        question : "Representing the birth and coronation of King Ramses II, this is...",
        answers : [
            { text : "Mount Rushmore", correct : false},
            { text : "Abu Simbel Temple", correct : true},
            { text: "The Bayon Temple", correct : false},
            { text : "Great Sphinx of Giza", correct : false},
        ]
    },
    {
        image : "assets/images/big-ben-london.jpg",
        question : "This famous clock tower is...",
        answers : [
            { text : "The Rajabai Clock Tower ", correct : false},
            { text : "The Prague Astronomical Clock", correct : false},
            { text : "Big Ben", correct : true},
            { text : "The Gros-Horloge", correct : false},
        ]
    },
    {
        image : "assets/images/burj-khalifa-dubai.jpg",
        question : "The Burj Khalifa, the worlds tallest structure can be found in...",
        answers : [
            { text : "Dubai", correct : true},
            { text : "Abu Dhabi", correct : false},
            { text : "Dublin", correct : false},
            { text : "Denver", correct : false},
        ]
    },
    {
        image : "assets/images/cliffs-of-moher-ireland.jpg",
        question : "This famous cliff edge is...",
        answers : [
            { text : "White Cliffs of Dover", correct : false},
            { text : "Slieve League", correct : false},
            { text : "The Cliffs of Moher", correct : true},
            { text : "Calvert Cliffs", correct : false},
        ]
    },
    {
        image : "assets/images/colosseum-rome.jpg",
        question : "The largest ancient amphitheatre ever built is...",
        answers : [
            { text : "The Pula Arena", correct : false},
            { text : "The Verona Arena", correct : false},
            { text : "The Amphitheatre of El Jem", correct : false},
            { text : "The Colosseum Rome", correct : true},
        ]
    },
    {
        image : "assets/images/death_valley_desert-cali.jpg",
        question : "Thought to be the hottest place on Earth during summer, which desert is this?",
        answers : [
            { text : "Gobi Desert", correct : false},
            { text : "Death Valley Desert", correct : true},
            { text : "Sahara Desert", correct : false},
            { text : "Kalahari Desert", correct : false},
        ]
    },
    {
        image : "assets/images/eiffel_tower_paris.jpg",
        question : "Requiring 60 tons of paint every seven years to prevent it from rusting, The Eiffel Tower can be found in which city?",
        answers : [
            { text : "Perth", correct : false},
            { text : "Paris", correct : true},
            { text : "Phoenix", correct : false},
            { text : "Padang", correct : false},
        ]
    },
    {
        image : "assets/images/grand-canyon-arizona.jpg",
        question : "In 1909, which of these famous canyons was the site of an Ancient Egyptian artifacts hoax?",
        answers : [
            { text : "The Grand Canyon of Yellowstone", correct : false},
            { text : "Antelope Canyon", correct : false},
            { text : "Kings Canyon", correct : false},
            { text : "The Grand Canyon", correct : true},
        ]
    },
    {
        image : "assets/images/pyramids-of-giza-egypt.jpg",
        question : "Which is not one of the Great Pyraminds of Giza?",
        answers : [
            { text : "Pyramid of Cheops", correct : false},
            { text : "Pyramid of Khafre", correct : false},
            { text : "Pyramid of Djoser", correct : true},
            { text : "Pyramid of Menkaure", correct : false},
        ]
    },
    {
        image : "assets/images/sagrada-familia-barcelona.jpg",
        question : "The largest unfinished Church in the world is...?",
        answers : [
            { text : "Sagrada Família", correct : true},
            { text : "Notre Dame", correct : false},
            { text : "St. Peter's Basilica", correct : false},
            { text : "Cologne Cathedral", correct : false},
        ]
    },
    {
        image : "assets/images/statue-of-liberty-new-york.jpg",
        question : "Lady Liberty is struck by lightning how many times every year?",
        answers : [
            { text : "Around 10 times", correct : false},
            { text : "Around 200 times", correct : false},
            { text : "Around 600 times", correct : true},
            { text : "Around 25 times", correct : false},
        ]
    },
    {
        image : "assets/images/taj-mahal-india.jpg",
        question : "Who did the Mughal Emperor Shah Jahan build the Taj Mahal in memory of?",
        answers : [
            { text : "His mother", correct : false},
            { text : "His favourite daughter", correct : false},
            { text : "His favourite wife", correct : true},
            { text : "His first wife", correct : false},
        ]
    },
    {
        image : "assets/images/the-great-wall-china.jpg",
        question : "The Great Wall of China was built by which Dynasty?",
        answers : [
            { text : "Ming dynasty", correct : false},
            { text : "Qin Dynasty", correct : true},
            { text : "Han Dynasty", correct : false},
            { text : "Shang Dynasty", correct : false},
        ]
    },
    {
        image : "assets/images/the-louvre-paris.jpg",
        question : "The Mona Lisa is the most famous art piece in The Louvre. What is the most valuable?",
        answers : [
            { text : "The Ain Ghazal Statue", correct : false},
            { text : "The Mona Lisa", correct : true},
            { text : "Regent Diamond", correct : false},
            { text : "Winged Victory of Samothrace", correct : false},
        ]
    },
    {
        image : "assets/images/the-sydney-opera-house-australia.jpg",
        question : "In an international design competition held in 1956, how many designs were submitted for the Sydney Opera House?",
        answers : [
            { text : "8", correct : false},
            { text : "75", correct : false},
            { text : "1456", correct : false},
            { text : "233", correct : true},
        ]
    },
]

// Immediately loads start modal with game rules, optional player name input and start button 
window.addEventListener("load", function () {
            document.getElementById("start-modal").style.display = "block";
        },);

const modal = document.getElementById("start-modal");
let username = document.getElementById("username");
const startQuizButton = document.getElementById("start-button")
const quizImages = document.getElementById("quiz-img")
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContainerElement = document.getElementsByClassName("quizContainer");
const circularProgress = document.getElementsByClassName("circular-progress");
const playerScore = document.getElementById("result-modal");

startQuizButton.addEventListener("click", startQuiz);

let shuffledQuestions

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    modal.style.display = "none";
    playerScore.style.display = "none";
    // Shuffles the questions for every new game
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
// Gets the current question and answers set as well as the associated image
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById('quiz-img').innerHTML = `<img src="${currentQuestion.image}">`;
    
    // Shows the question number beside the question, increments by 1
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    // Replaces html answer button placehodlders with the answers from each question
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answers.correct) {
                button.dataset.correct = answers.correct;
            }
        button.addEventListener("click", selectAnswer);
        
    });
}

// Resets the quiz page - displays new questions and asnwers and hides the next button until answer is selected
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct;
// Adds a new class to the answer button selected if it is correct or incorrect, displaying the color associated with that class
    if (isCorrect){
        selectedButton.classList.add("btnCorrect");
        score++; 
    } else {
        selectedButton.classList.add("btnIncorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct");
        }
        // Disables all buttons once an answer is selected
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Next button will show the next question until it has reached the 10th, then will execute the showScore function
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < 10){
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < 10){
        handleNextButton();
    } else {
        startQuiz();
    }
})

function showScore() {
    playerScore.style.display = "block";
    // Displays the users name if they have input it at the start. If not "Player 1" will display as default
    if(username.value){
        document.getElementById("playerName").innerHTML = `${username.value}`;
    } else {
        document.getElementById("playerName").innerHTML = `${"Player 1"}`;
    }
// Players score out of ten questions
    document.getElementById("player-score-value").innerHTML = `${score} out of ${currentQuestionIndex} correct answers!`;

// Feedback to players based on their score level
    let playerFeedback;
    if (score <= 2) {
        playerFeedback = "It was tricky, right? Dont worry though, you can try again!";
    } else if (score <= 5) {
        playerFeedback = "Great effort! You're on the right track.";
    } else if (score <= 9) {
        playerFeedback = "Fantastic! You really know your stuff!.";
    }else if (score = 10) {
        playerFeedback = "Wowee! You're a Famous Places genius!";
    }
    document.getElementById("player-feedback").innerHTML = `${playerFeedback}`;    
}

startQuiz();

const exitQuizButton = document.getElementById("exit-quiz");
exitQuizButton.addEventListener("click", function() {
  modal.style.display = "block";
  playerScore.style.display = "none";
  resetState();
});

