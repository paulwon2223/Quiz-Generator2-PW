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

mainQuestions.style.display = 'none';
answerChoices.style.display = 'none';
nextButton.style.display = 'none';
doneButton.style.display = 'none';


beginButton.addEventListener('click', startQuiz);

function startQuiz() {
    header.style.display = 'none';
    beginButton.style.display = 'none';
    mainQuestions.style.display = 'block';
    answerChoices.style.display = 'block';
    nextButton.style.display = 'block';
    nextButton.style.display = 'center';
    generateQuestion();
    nextButton.addEventListener('click', generateQuestion);
}

var quizQuestions = [
    {
        question: 'What is 2 + 2?',
        choice1: '3',
        choice2: '4',
        choice3: '10',
        choice4: '0',
        answer: '4',
    },
    {
        question: 'What does CSS stand for?',
        choice1: 'Cascading Style Sheet',
        choice2: 'Counter Strike Source',
        choice3: 'Computer System Software',
        choice4: 'Cascading Styling Source',
        answer: 'Cascading Style Sheet'
    },
    {
        question: 'What is 3 + 3?',
        choice1: '33',
        choice2: '4',
        choice3: '6',
        choice4: '0',
        answer: '6',
    },
    {
        question: 'Which of the following is not a valid data type in Javascript?',
        choice1: 'Boolean',
        choice2: 'Number',
        choice3: 'Undefined',
        choice4: 'Value',
        answer: 'Value',
    }
];

function endGame() {
    doneButton.style.display = 'block';
    mainQuestions.style.display = 'none';
    answerChoices.style.display = 'none';
    nextButton.style.display = 'none';

}


var index = 0;
function generateQuestion(question) {
        var question = quizQuestions[index];
        Math.floor(Math.random() * quizQuestions.length);
        
        if (index >= quizQuestions.length) {
            endGame()
        } else {
            mainQuestions.textContent = quizQuestions[index].question;
            bttn1.textContent = quizQuestions[index].choice1;
            bttn2.textContent = quizQuestions[index].choice2;
            bttn3.textContent = quizQuestions[index].choice3;
            bttn4.textContent = quizQuestions[index].choice4;
        }
        index++;

        bttn1.addEventListener('click', function(event) {
            event.preventDefault();
            if (quizQuestions[index].answer === '4') {
                alert('correct')
            } else {
                alert('incorrect');
            }
        })

        bttn2.addEventListener('click', function(event) {
            event.preventDefault();
            if (quizQuestions[index].answer === 'Cascading Style Sheet') {
                alert('correct')
            } else {
                alert('incorrect');
            }
        })

        bttn3.addEventListener('click', function(event) {
            event.preventDefault();
            if (quizQuestions[index].answer === '6') {
                alert('correct')
            } else {
                alert('incorrect');
            }
        })

        bttn4.addEventListener('click', function(event) {
            event.preventDefault();
            if (quizQuestions[index].answer === 'Value') {
                alert('correct')
            } else {
                alert('incorrect');
            }
        })

}

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




