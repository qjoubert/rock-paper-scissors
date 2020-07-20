import play from "./play";
import round from "./round";
import score from "./score";

export default (function() {

  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const infoDisplay = document.querySelector("#info-display");

  function _checkWinner() {
    return ( 
      score.getPlayerScore() == 3 || 
      score.getComputerScore() == 3
    );
  }

  function _clearMoves() {
    document.querySelector("#computer-move").textContent = "";
    document.querySelector("#player-move").textContent = "";
  }

  function _getWinner() {
    if (score.getPlayerScore() == 3) return "player";
    if (score.getComputerScore() == 3) return "evil";
    return null;
  }

  function _hide(btn) {
    btn.style.display = "none";
  }

  function _show(btn) {
    btn.style.display = "inline-block";
  }

  function _showInfo(text) {
    infoDisplay.textContent = text;
  }

  function _showWinner(winner) {
    infoDisplay.textContent = (`
     ${winner} wins the game!
     Game Over
    `);
  }

  function onMoveClick(e) {
    play.playRound(e);
    
    if (_checkWinner()) {
      _showWinner(_getWinner());
      play.hideMoveBtns();
      _hide(resetBtn);
      _show(playBtn);
    } 

    else {
      round.setRound();
      round.showRound();
    }
  }

  function resetGame(e) {
    if (e.target.id === "reset-btn") {
      round.clearRound();
      play.hideMoveBtns();
      _hide(resetBtn);
      _show(playBtn);
      _showInfo('click "play" to start a new game');
    } 
    _clearMoves();
    score.clearScore();
    round.resetRound();
    score.resetScore();
    score.showScore();
  }  
  
  function setNewGame() {
    _hide(playBtn);
    _show(resetBtn);
    play.showMoveBtns();
    round.showRound();
    _showInfo("choose your move");
  }

  return {
    onMoveClick,
    resetGame,
    setNewGame
  };
})(); 
