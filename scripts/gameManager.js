import displayManager from "/scripts/displayManager.js";
import playManager from "/scripts/playManager.js";
import roundManager from "/scripts/roundManager.js";
import scoreManager from "/scripts/scoreManager.js";

const gameManager = (function() {

  function checkWinner() {
    const playerScore = scoreManager.getPlayerScore();
    const computerScore = scoreManager.getComputerScore();

    return playerScore === 3 || computerScore === 3 ? true : false;
  }

  function getWinner() {
    const playerScore = scoreManager.getPlayerScore();
    const computerScore = scoreManager.getComputerScore();
    if (playerScore == 3) return "player";
    if (computerScore == 3) return "computer";
    return null;
  }

  function setNewGame(e) {
    displayManager.showMoveBtns();
    resetGame(e);
  };

  function play(e) {
    roundManager.setRoundNumber();

    const playResults = playManager.getPlayResults(e);  
    scoreManager.setScore(playResults[2]);
    displayManager.showRoundResults(playResults);
    
    displayManager.showScore();

    if (checkWinner()) {
      displayManager.showWinner(getWinner());
      resetGame(e);
    }
  };

  function resetGame(e) {
    if (e && e.target.id === "reset-btn" || e.target.id === "play-btn") {
      displayManager.clearResults();
      displayManager.clearScore();
      displayManager.clearWinner();
    }

    if (e && e.target.id !== "play-btn") {
      displayManager.hideMoveBtns();
    } 

    roundManager.resetRound();
    scoreManager.resetScore();
  };

  return {
    setNewGame,
    resetGame,
    play
  };
})(); 

export default gameManager;
