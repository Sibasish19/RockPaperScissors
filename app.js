//Store all the DOM variables
let userScore = 0;
const userScore_span = document.getElementById('user-score');
let compScore = 0;
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissor_div = document.querySelector('#scissor');

//Game function
function userWon(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    result_div.textContent = `Your choice: ${userChoice} beats computer's choice: ${computerChoice}. You won!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow');}, 600);
}

function userLost(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerText = compScore;
    result_div.textContent = `Your choice: ${userChoice} loses to computer's choice: ${computerChoice}. You lost!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow');}, 600);
}

function gameDraw(userChoice, computerChoice) {
    result_div.textContent = `Oh! It's a tie. Try again!`
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow');}, 600);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + '_' +computerChoice) {
        case "rock_scissor":
        case "scissor_paper":
        case "paper_rock":
            userWon(userChoice, computerChoice);
            break;
        case "scissor_rock":
        case "rock_paper":
        case "paper_scissor":
            userLost(userChoice, computerChoice);
            break;
        default:
            gameDraw(userChoice, computerChoice);
            break;
    }
}

//Add click event listeners to each 3 buttons
rock_div.addEventListener('click', onClick);
paper_div.addEventListener('click', onClick);
scissor_div.addEventListener('click', onClick);

function onClick(e) {
    playGame(e.target.id);
}