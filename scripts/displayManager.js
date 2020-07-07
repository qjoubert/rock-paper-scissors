
import roundManager from "/scripts/roundManager.js";
import scoreManager from "/scripts/scoreManager.js";

const displayManager = (function() {

  const moveBtns = document.querySelectorAll(".move-btn");
  const infoDisplay = document.querySelector("#info-display");
  const resultsDisplay = document.querySelector("#results-display");
  const roundDisplay = document.querySelector("#round-display");
  const scoreDisplay = document.querySelector("#score-display")

  function clearResults() {
    resultsDisplay.innerHTML = "";
  }

  function clearRound() {
    roundDisplay.textContent = "";
  }

  function clearScore() {
    scoreDisplay.textContent = "00 - 00";
  }

  function hideMoveBtns() {
    moveBtns.forEach(btn => {
      btn.style.visibility = "hidden";
    });
  }

  function showComputerPlay(play) {
    const para = document.querySelector("#computer-play");
    para.textContent = `${play} !`;
  }

  function showMoveBtns() {
    moveBtns.forEach(btn => { 
      btn.style.visibility = "visible";
    });
  }

  function showPlayerPlay(play) {
    const para = document.querySelector("#player-play");
    para.textContent = `${play} !`;
  }

  function showRound() {
    const round = roundManager.getRound().padStart(2, "0");
    roundDisplay.textContent = `Round ${round}`;
  }

  function showRoundResult(result) {
    const text = 
      result == "draw" ? "it's a draw !" :
      result == "player" ? "Player wins this round !" :
      "Evil wins this round !";
    infoDisplay.textContent = text;
  }

  function showNewRoundInfo() {
    infoDisplay.textContent = `time to choose your move`;
  }

  function showScore() {
    const playerScore = scoreManager.getPlayerScore().padStart(2, "0");
    const computerScore = scoreManager.getComputerScore().padStart(2, "0");

    scoreDisplay.textContent = `${playerScore} - ${computerScore}`;
  }

  function showStartInfo() {
    infoDisplay.textContent = "click \"play\" to start a new game";
  }

  function showWinner(winner) {
    infoDisplay.textContent = (`
     ${winner} wins the game!
     Game Over
    `);
  }

  return { 
    clearResults,
    clearRound,
    clearScore,
    hideMoveBtns,
    showComputerPlay,
    showMoveBtns,
    showPlayerPlay,
    showRound,
    showRoundResult,
    showNewRoundInfo,
    showScore,
    showStartInfo,
    showWinner 
  };
})();

export default displayManager;
