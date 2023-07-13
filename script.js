import { getRandomInt } from "./helper.js";

var playerScore = 0
var computerScore = 0

function getComputerSelection(){
    const possibleChoices = ["Rock", "Paper", "Scissors"]
    const choiceNum = getRandomInt(possibleChoices.length)
    return possibleChoices[choiceNum]
}
function playRound(playerSelection, computerSelection){
    let comparisonString = playerSelection[0]+computerSelection[0]
    const comparisonMap = new Map([
      ["RR", "tie"],
      ["RP", "computer"],
      ["RS", "player"],
      ["PR", "player"],
      ["PP", "tie"],
      ["PS", "computer"],
      ["SR", "computer"],
      ["SP", "player"],
      ["SS", "tie"]
    ]);
    
    const winnerOrTie = comparisonMap.get(comparisonString)
    let resultString1
    let resultString2
    switch (winnerOrTie) {
      case "tie":
        resultString1 = "It's a tie!"
        resultString2 = `${playerSelection} draws ${computerSelection}`
        break;
      case "player":
        playerScore = playerScore + 1
        resultString1 = "You win!"
        resultString2 = `${playerSelection} beats ${computerSelection}`
        break;
      case "computer":
        computerScore = computerScore + 1
        resultString1 = "You lose!"
        resultString2 = `${computerSelection} beats ${playerSelection}`
        break;
    
      default:
        break;
    }
    return `${resultString1} ${resultString2}`
}
  
  // Input erster Spieler + in Variable speichern + Eingabe überprüfen
function getPlayerSelection(playerSelection){
  let lowerPlayerSelection = playerSelection.toLowerCase()
  let cleanPlayerSelection = lowerPlayerSelection.charAt(0).toUpperCase() + lowerPlayerSelection.slice(1)
  return cleanPlayerSelection
}

function RPSGame(){
    const computerSelection = getComputerSelection()
    const playerSelection = getPlayerSelection()
    console.log(playRound(playerSelection, computerSelection))
}



let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    const playerSelection = getPlayerSelection(button.textContent)
    const computerSelection = getComputerSelection()
    
    // show result
    let resultString = playRound(playerSelection, computerSelection)
    let resultDiv = document.querySelector("#result")
    resultDiv.textContent = `Das Ergebnis ist ${resultString}`

    //show score
    let scoreDiv = document.querySelector("#score")
    scoreDiv.textContent = `Der Stand ist: ${playerScore} für dich 
      und ${computerScore} für den Computer`
  });
});
