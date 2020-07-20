import play from "/scripts/play.js";
import round from "/scripts/round.js";
import score from "/scripts/score.js";

export default (function() {

  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const infoDisplay = document.querySelector("#info-display");

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

  function hidePlayBtn() {
    playBtn.style.display = "none";
  }

  function hideResetBtn() {
    resetBtn.style.display = "none";
  }

  function setNewGame() {
    hidePlayBtn();
    showResetBtn();
    play.showMoveBtns();
    round.showRound();
    showNewRoundInfo();
  }

  function showPlayBtn() {
    playBtn.style.display = "inline-block";
  }

  function showResetBtn() {
    resetBtn.style.display = "inline-block";
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

  function showStartInfo() {
    infoDisplay.textContent = "click \"play\" to start a new game";
  }

  function showWinner(winner) {
    infoDisplay.textContent = (`
     ${winner} wins the game!
     Game Over
    `);
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
    
    play.showPlayerPlay(playerPlay);
    play.showComputerPlay(computerPlay);
    score.showScore();
    showRoundResult(isDraw ? "draw" : playWinner);
    
    if (checkWinner()) {
      showWinner(getWinner());
      play.hideMoveBtns();
      hideResetBtn();
      showPlayBtn();
    } else {
      round.setRound();
      round.showRound();
    }
  }

  function resetGame(e) {
    if (e.target.id === "reset-btn") {
      round.clearRound();
      play.hideMoveBtns();
      hideResetBtn();
      showPlayBtn();
      showStartInfo();
    } 
    
    score.clearScore();
    round.resetRound();
    score.resetScore();
    score.showScore();
  }

  return {
    setNewGame,
    resetGame,
    playRound
  };
})(); 
