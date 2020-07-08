import displayManager from "/scripts/displayManager.js";
import playManager from "/scripts/playManager.js";
import roundManager from "/scripts/roundManager.js";
import scoreManager from "/scripts/scoreManager.js";

const gameManager = (function() {

  function checkWinner() {
    const playerScore = +scoreManager.getPlayerScore();
    const computerScore = +scoreManager.getComputerScore();
    return playerScore === 3 || computerScore === 3;
  }

  function getWinner() {
    const playerScore = scoreManager.getPlayerScore();
    const computerScore = scoreManager.getComputerScore();
    if (playerScore == 3) return "player";
    if (computerScore == 3) return "evil";
    return null;
  }

  function setNewGame() {
    displayManager.hidePlayBtn();
    displayManager.showResetBtn();
    displayManager.showMoveBtns();
    displayManager.showRound();
    displayManager.showNewRoundInfo();
  }

  function play(e) {
    const playerPlay = playManager.getPlayerPlay(e);
    const computerPlay = playManager.getComputerPlay();
    const isDraw = playManager.checkDraw(playerPlay, computerPlay);
    let playWinner; 
    
    if(!isDraw) {
      playWinner = playManager.getPlayWinner(playerPlay, computerPlay);
      scoreManager.setScore(playWinner);
    }
    
    displayManager.showPlayerPlay(playerPlay);
    displayManager.showComputerPlay(computerPlay);
    displayManager.showScore();
    displayManager.showRoundResult(isDraw ? "draw" : playWinner);
    
    if (checkWinner()) {
      displayManager.showWinner(getWinner());
      displayManager.hideMoveBtns();
      displayManager.hideResetBtn();
      displayManager.showPlayBtn();
    } else {
      roundManager.setRound();
      displayManager.showRound();
    }
  }

  function resetGame(e) {
    if (e.target.id === "reset-btn") {
      displayManager.clearRound();
      displayManager.hideMoveBtns();
      displayManager.hideResetBtn();
      displayManager.showPlayBtn();
      displayManager.showStartInfo();
    } 
    
    displayManager.clearResults();
    displayManager.clearScore();
    roundManager.resetRound();
    scoreManager.resetScore();
    displayManager.showScore();
  }

  return {
    setNewGame,
    resetGame,
    play
  };
})(); 

export default gameManager;
