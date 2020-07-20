import score from "./score.js";

export default (function() {

  const moveBtns = document.querySelectorAll(".move-btn");
  const infoDisplay = document.querySelector("#info-display");
    
  function _getComputerMove() {
    const n = Math.floor(Math.random() * 3);
    
    return (
      n === 0 ? "rock" :
      n === 1 ? "paper" : 
      "scissors"
    );
  }

  function _getPlayWinner(playerMove, computerMove) {
    return (
      playerMove == "rock" && computerMove == "scissors" ||
      playerMove == "scissors" && computerMove == "paper" ||
      playerMove == "paper" && computerMove == "rock" ?
      "player" : "computer"
    );
  }

  function _showComputerMove(play) {
    document.querySelector("#computer-move").textContent = `${play} !`;
  }

  function _showPlayerMove(play) {
    document.querySelector("#player-move").textContent = `${play} !`;
  }

  function _showPlayResult(result) {
    infoDisplay.textContent = 
      result == "draw" ? "it's a draw !" :
      result == "player" ? "Player wins this round !" :
      "Evil wins this round !";
  }

  function hideMoveBtns() {
    moveBtns.forEach(btn => btn.style.visibility = "hidden");
  }

  function playRound(e) {
    const playerMove = e.target.dataset.move;
    const computerMove = _getComputerMove();
    const draw = playerMove === computerMove;

    let playWinner; 
    
    if(!draw) {
      playWinner = _getPlayWinner(playerMove, computerMove);
      score.setScore(playWinner);
    }
    
    _showPlayerMove(playerMove);
    _showComputerMove(computerMove);
    score.showScore();
    _showPlayResult(draw ? "draw" : playWinner);
  }

  function showMoveBtns() {
    moveBtns.forEach(btn => btn.style.visibility = "visible");
  }

  return {
    hideMoveBtns,
    playRound,
    showMoveBtns,
  }
})();
