import display from "/scripts/display.js";
import play from "/scripts/play.js";
import round from "/scripts/round.js";
import score from "/scripts/score.js";

export default (function() {

  function checkWinner() {
    const playerScore = +score.getPlayerScore();
    const computerScore = +score.getComputerScore();
    return playerScore === 3 || computerScore === 3;
  }

  function getWinner() {
    const playerScore = score.getPlayerScore();
    const computerScore = score.getComputerScore();
    if (playerScore == 3) return "player";
    if (computerScore == 3) return "evil";
    return null;
  }

  function setNewGame() {
    display.hidePlayBtn();
    display.showResetBtn();
    display.showMoveBtns();
    display.showRound();
    display.showNewRoundInfo();
  }

  function playRound(e) {
    const playerPlay = play.getPlayerPlay(e);
    const computerPlay = play.getComputerPlay();
    const isDraw = play.checkDraw(playerPlay, computerPlay);
    let playWinner; 
    
    if(!isDraw) {
      playWinner = play.getPlayWinner(playerPlay, computerPlay);
      score.setScore(playWinner);
    }
    
    display.showPlayerPlay(playerPlay);
    display.showComputerPlay(computerPlay);
    display.showScore();
    display.showRoundResult(isDraw ? "draw" : playWinner);
    
    if (checkWinner()) {
      display.showWinner(getWinner());
      display.hideMoveBtns();
      display.hideResetBtn();
      display.showPlayBtn();
    } else {
      round.setRound();
      display.showRound();
    }
  }

  function resetGame(e) {
    if (e.target.id === "reset-btn") {
      display.clearRound();
      display.hideMoveBtns();
      display.hideResetBtn();
      display.showPlayBtn();
      display.showStartInfo();
    } 
    
    display.clearResults();
    display.clearScore();
    round.resetRound();
    score.resetScore();
    display.showScore();
  }

  return {
    setNewGame,
    resetGame,
    playRound
  };
})(); 
