// this function is used to get random choice from computer
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"]
  let randomChoice = Math.floor(Math.random() * choice.length)
  return choice[randomChoice]
}

// function that plays a single round of Rock Paper Scissors
const roundNumber = document.querySelector("#roundNumber")
const playerChoice = document.querySelector("#playerChoice")
const computerChoice = document.querySelector("#computerChoice")
const roundResult = document.querySelector("#roundResult")
const scoreDisplay = document.querySelector("#scoreDisplay")

let playerScore = 0
let computerScore = 0
let round = 0

function playRound(playerSelection) {
  round++

  let computerSelection = getComputerChoice()
  let result = ""
  if (playerSelection === computerSelection) {
    result = "ties"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`
    playerScore++
  } else {
    result = `you lose! ${computerSelection} beats ${playerSelection}`
    computerScore++
  }
  roundNumber.textContent = `Round: ${round}`
  playerChoice.textContent = `player: ${playerSelection}`
  computerChoice.textContent = `computer: ${computerSelection}`
  roundResult.textContent = result
  scoreDisplay.textContent = `player score: ${playerScore}, computer score: ${computerScore}`

  if (round >= 5) {
    showfinalResult()
  }
}
function showfinalResult() {
  let finalResult = ""
  if (playerScore === computerScore) {
    finalResult = "TIES"
  } else if (playerScore > computerScore) {
    finalResult = "You win"
  } else {
    finalResult = "You lose"
  }
  document.querySelector(
    "#finalResult"
  ).textContent = `final result: ${finalResult}`
}
