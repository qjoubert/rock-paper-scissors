import displayManager from "/scripts/displayManager.js";
import playManager from "/scripts/playManager.js";
import roundManager from "/scripts/roundManager.js";
import scoreManager from "/scripts/scoreManager.js";

const gameManager = (function() {

  function checkWinner() {
    const playerScore = +scoreManager.getPlayerScore();
    const computerScore = +scoreManager.getComputerScore();

    return playerScore === 3 || computerScore === 3 ? true : false;
  }

  function getWinner() {
    const playerScore = scoreManager.getPlayerScore();
    const computerScore = scoreManager.getComputerScore();
    if (playerScore == 3) return "player";
    if (computerScore == 3) return "evil";
    return null;
  }

  function setNewGame(e) {
    resetGame(e);
    displayManager.showMoveBtns();
    displayManager.showRound();
    displayManager.showNewRoundInfo();
  };

  function play(e) {
    const playerPlay = playManager.getPlayerPlay(e);
    const computerPlay = playManager.getComputerPlay();
    const isDraw = playManager.checkDraw(playerPlay, computerPlay);
    let playWinner; 
    
    roundManager.setRound();

    if(!isDraw) {
      playWinner = playManager.getPlayWinner(playerPlay, computerPlay);
      console.log(playWinner);
      scoreManager.setScore(playWinner);
    }

    displayManager.showPlayerPlay(playerPlay);
    displayManager.showComputerPlay(computerPlay);
    displayManager.showRound();
    displayManager.showScore();

    const result = isDraw ? "draw" : playWinner;
    displayManager.showRoundResult(result);

    if (checkWinner()) {
      displayManager.showWinner(getWinner());
      // resetGame(e);
    }
  };

  function resetGame(e) {
    if (e && e.target.id === "reset-btn" || e.target.id === "play-btn") {
      displayManager.clearResults();
      displayManager.clearScore();
    }

    if (e && e.target.id !== "play-btn") {
      displayManager.clearRound();
      displayManager.hideMoveBtns();
      displayManager.showStartInfo();
    } 

    roundManager.resetRound();
    scoreManager.resetScore();
    displayManager.showScore();
  };

  return {
    setNewGame,
    resetGame,
    play
  };
})(); 

export default gameManager;
