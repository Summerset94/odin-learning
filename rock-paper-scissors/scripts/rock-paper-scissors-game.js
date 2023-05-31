//We can choose our move, but need to create a random computer move
function computerMove() {
  let computerResult = '';
  const computerRoll = Math.random();
  if (computerRoll < 0.33) {
    computerResult = 'rock';
  } else if (computerRoll >= 0.33 && computerRoll < 0.66) {
    computerResult = 'paper';
  } else {
    computerResult = 'scissors'
  }
  return computerResult;
}

//Create a function to play the game, count the results
function playGame(playerMove) {
let result = '';
//binding our HTML with JS to show output on a page
const resultOutput = document.querySelector('.result-area');
const scoreboardOutput = document.querySelector('.scoreboard-output');
const computerResult = computerMove();
  if (playerMove === 'rock'){
    if (computerResult === 'rock') {
      result = `You both chose ${playerMove}. Tie`;
      score.ties++
    } else if (computerResult === 'paper') {
      result = `You chose ${playerMove}, computer chose paper. You lose.`;
      score.loses++
    } else if (computerResult === 'scissors') {
      result = `You chose ${playerMove}, computer chose ${computerResult}. You win`;
      score.wins++
    }   
  }

  if (playerMove === 'paper'){
    if (computerResult === 'paper') {
      result = `You both chose ${playerMove}. Tie`;
      score.ties++
    } else if (computerResult === 'scissors') {
      result = `You chose ${playerMove}, computer chose ${computerResult}. You lose.`;
      score.loses++
    } else if (computerResult === 'rock') {
      result = `You chose ${playerMove}, computer chose ${computerResult}. You win`;
      score.wins++
    }   
  }

  if (playerMove === 'scissors'){
    if (computerResult === 'scissors') {
      result = `You both chose ${playerMove}. Tie`;
      score.ties++
    } else if (computerResult === 'rock') {
      result = `You chose ${playerMove}, computer chose ${computerResult}. You lose.`;
      score.loses++
    } else if (computerResult === 'paper') {
      result = `You chose ${playerMove}, computer chose ${computerResult}. You win`;
      score.wins++
    }   
  }
  
  resultOutput.innerHTML = result;
  scoreboardOutput.innerHTML = `Wins: ${score.wins} |Loses: ${score.loses} |Ties ${score.ties}`;
  return result;
};

//creating a variable object to storage the score count.
let score = {
  wins: 0,
  loses: 0,
  ties: 0
};

//Adding ways to select our move through onclick function in HTML
