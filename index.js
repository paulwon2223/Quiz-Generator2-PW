var header = document.getElementById('main-header');
var mainQuestions = document.getElementById('question');
var answerChoices = document.getElementById('answers');
var nextButton = document.getElementById('next-bttn');
var doneButton = document.getElementById('done-bttn');
var beginButton = document.getElementById('begin-bttn');
var bttn1 = document.getElementById('bttn1');
var bttn2 = document.getElementById('bttn2');
var bttn3 = document.getElementById('bttn3');
var bttn4 = document.getElementById('bttn4');
var answer = document.getElementById('answers');
var scoreValue = document.getElementById('score');
var finalMessage = document.getElementById('final-message')

mainQuestions.style.display = 'none';
answerChoices.style.display = 'none';
nextButton.style.display = 'none';
doneButton.style.display = 'none';
scoreValue.style.display = 'none';
finalMessage.style.display = 'none';


beginButton.addEventListener('click', startQuiz);

function startQuiz() {
    header.style.display = 'none';
    beginButton.style.display = 'none';
    mainQuestions.style.display = 'block';
    answerChoices.style.display = 'block';
    nextButton.style.display = 'block';
    nextButton.style.display = 'center';
    scoreValue.style.display = 'block';
    generateQuestion();
    nextButton.addEventListener('click', generateQuestion);
}

var quizQuestions = [
    {
        question: 'What is 2 + 2?',
        A: '3',
        B: '4',
        C: '10',
        D: '0',
        answer: 'B'
    },
    {
        question: 'What does CSS stand for?',
        A: 'Computer System Software',
        B: 'Counter Strike Source',
        C: 'Cascading Style Sheet',
        D: 'Cascading Styling Source',
        answer: 'C'
    },
    {
        question: 'What is 3 + 3?',
        A: '33',
        B: '4',
        C: '6',
        D: '0',
        answer: 'C'
    },
    {
        question: 'Which of the following is not a valid data type in Javascript?',
        A: 'Boolean',
        B: 'Number',
        C: 'Undefined',
        D: 'Value',
        answer: 'D'
    }
];

function endGame() {
    doneButton.style.display = 'block';
    mainQuestions.style.display = 'none';
    answerChoices.style.display = 'none';
    nextButton.style.display = 'none';
    finalMessage.style.display = "block";
    doneButton.addEventListener('click', function() {
        alert('would you like to restart?') 
    } )

}


var index = 0;
function generateQuestion(question) {
        var question = quizQuestions[index];
        Math.floor(Math.random() * quizQuestions.length);
        
        if (index >= quizQuestions.length) {
            endGame()
        } else {
            mainQuestions.textContent = quizQuestions[index].question;
            bttn1.textContent = quizQuestions[index].A;
            bttn2.textContent = quizQuestions[index].B;
            bttn3.textContent = quizQuestions[index].C;
            bttn4.textContent = quizQuestions[index].D;
        }
        index++;

}
bttn1.addEventListener('click', function(event) {
    // event.preventDefault();
    if (quizQuestions[index].answer === 'A') {
        alert('correct')
    } else {
        alert('incorrect');
    }
}
)

bttn2.addEventListener('click', function(event) {
    // event.preventDefault();
    if (quizQuestions[index].answer === 'B') {
        alert('correct')
    } else {
        alert('incorrect');
    }
})

bttn3.addEventListener('click', function(event) {
    // event.preventDefault();
    if (quizQuestions[index].answer === 'C') {
        alert('correct')
    } else {
        alert('incorrect');
    }
})

bttn4.addEventListener('click', function(event) {
    // event.preventDefault();
    if (quizQuestions[index].answer === 'D') {
        alert('correct')
    } else {
        alert('incorrect');
    }
})



// bttn1.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (quizQuestions[index].answer === '4') {
//         alert('correct')
//     } else {
//         alert('incorrect');
//     }
// } )


// bttn1.addEventListener('click', generateQuestion);
// bttn2.addEventListener('click', generateQuestion);
// bttn3.addEventListener('click', generateQuestion);
// bttn4.addEventListener('click', generateQuestion);




