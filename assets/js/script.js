const questions = [
    {
        image : "assets/images/abu-simbel-temples-egypt.jpg",
        question : "Representing the birth and coronation of King Rameses II, this is...",
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
        question : "In 1909, which of these famous canyons was the site of a giant hoax?",
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
        question : "Who did Mughal Emperor Shah Jahan build the Taj Mahal in memory of?",
        answers : [
            { text : "His mother", correct : false},
            { text : "His favourite daughter", correct : false},
            { text : "His favourite wife", correct : true},
            { text : "His first wife", correct : false},
        ]
    },
    {
        image : "assets/images/the-great-wall-china.jpg",
        question : "Great Wall of China was buuilt by which Dynasty?",
        answers : [
            { text : "Ming dynasty", correct : false},
            { text : "Qin Dynasty,", correct : true},
            { text : "Han Dynasty", correct : false},
            { text : "Shang Dynasty", correct : false},
        ]
    },
    {
        image : "assets/images/the-louvre-paris.jpg",
        question : "The Mona Lisa is the most famous art piece in The Louvre. What is the most valuable?",
        answers : [
            { text : "The Ain Ghazal Statue", correct : false},
            { text : "The Mona Lisa,", correct : true},
            { text : "Regent Diamond", correct : false},
            { text : "Winged Victory of Samothrace", correct : false},
        ]
    },
    {
        image : "assets/images/the-sydney-opera-house-australia.jpg",
        question : "in an international design competition held in 1956, how many designs were submitted for the Sydney Opera House?",
        answers : [
            { text : "8", correct : false},
            { text : "75,", correct : false},
            { text : "1456", correct : false},
            { text : "233", correct : true},
        ]
    },
]

const quizImages = document.getElementById("quiz-img")
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}



/** shows the question number beside the question */
function showQuestions(){

    let currentQuestion = questions[currentQuestionIndex];

    document.getElementById('quiz-img').innerHTML = `<img src="/${currentQuestion.image}">`;
    
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();