
import roundManager from "/scripts/roundManager.js";
import scoreManager from "/scripts/scoreManager.js";

const displayManager = (function() {

  const moveBtns = document.querySelectorAll(".move-btn");
  const resultsDisplay = document.querySelector("#results-display");
  const scoreDisplay = document.querySelector("#score-display")
  const winnerDisplay = document.querySelector("#winner-display");

  function clearResults() {
    resultsDisplay.innerHTML = "";
  }

  function clearScore() {
    scoreDisplay.innerHTML = "";
  }

  function clearWinner() {
    winnerDisplay.innerHTML = "";
  }

  function hideMoveBtns() {
    moveBtns.forEach(btn => {
      btn.style.display = "none";
    });
  }

  function showMoveBtns() {
    moveBtns.forEach(btn => { 
      btn.style.display = "inline-block";
    });
  }

  function showRoundResults(results) {
    const playerPlay = results[0];
    const computerPlay = results[1];
    const playResult = results[2];
  
    const winnerText = 
      playResult == "draw" ? "it's a draw, this round counts for nothing" :
      playResult == "player" ? "Player wins this round!" :
      "Computer wins this round!";
  
    const message = `Player played ${playerPlay} and Computer played ${computerPlay} : 
    ${winnerText}`;
  
    resultsDisplay.innerHTML  = message;
  }

  function showScore() {
    const roundNumber = roundManager.getRoundNumber();
    const playerScore = scoreManager.getPlayerScore();
    const computerScore = scoreManager.getComputerScore();

    scoreDisplay.innerHTML = (`
      Score for round number ${roundNumber} :
      Player: ${playerScore} - Computer: ${computerScore}
    `);
  }

  function showWinner(winner) {
    winnerDisplay.innerHTML = (`
     ${winner} won three rounds!
     ${winner} wins the game!
     Game Over
    `);
  }

  return { 
    clearResults,
    clearScore,
    clearWinner,
    hideMoveBtns,
    showMoveBtns,
    showRoundResults,
    showScore,
    showWinner 
  };
})();

export default displayManager;
