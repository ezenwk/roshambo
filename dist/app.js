let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

const yourPick = document.querySelector('.display-your-pick');
const housePick = document.querySelector('.display-house-pick');
const displayResult = document.querySelector('#result');

const buttons = document.querySelectorAll('.choice-btn');

const resetBtn = document.querySelector('#reset');

const rulesBtn = document.querySelector('#see-rules');
const p = document.querySelector('#rules-info');

let userPick;
let randChoice;
let gameResult;

userScore = 0;
houseScore = 0;



buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        userPick = e.target.id;
        yourPick.innerHTML = `<img src="dist/images/${userPick}.svg" class="user-pick" alt="${userPick}-image">`;
        displayHouseChoice();
        result();
        score();
    })
})

const displayHouseChoice = () => {
    choices = ['rock', 'paper', 'scissors'];
    randChoice = choices[Math.floor(Math.random() * choices.length)];
    housePick.innerHTML = `<img src="dist/images/${randChoice}.svg" class="user-pick" alt="${randChoice}-image">`;
}

const result = () => {
    switch (userPick + randChoice) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            gameResult = '🎉 YOU WIN 🎉';
            break;

        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
            gameResult = '⛔ YOU LOSE ⛔';
            break;

        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            gameResult = '🤝 TIE 🤝';
            break;
    }

    displayResult.innerHTML = gameResult;
}

const score = () => {
    if (gameResult === '🎉 YOU WIN 🎉') {
        playerScore.innerHTML = userScore += 1;
    }

    if (gameResult === '⛔ YOU LOSE ⛔') {
        computerScore.innerHTML = houseScore += 1;
    }

    if (userScore > houseScore) {
        playerScore.style.color = 'green';
        computerScore.style.color = 'red';
    } else if (userScore < houseScore) {
        playerScore.style.color = 'red';
        computerScore.style.color = 'green';
    } else {
        playerScore.style.color = 'white';
        computerScore.style.color = 'white';
    }
}

resetBtn.addEventListener('click', function () {
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    yourPick.innerHTML = '';
    housePick.innerHTML = '';
    displayResult.innerHTML = 'SELECT A PICK';
    userScore = 0;
    houseScore = 0;
    playerScore.style.color = 'white';
    computerScore.style.color = 'white';
})

rulesBtn.addEventListener('click', function () {
    p.classList.toggle('hide');
})
