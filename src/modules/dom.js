
export default (function() {
  const playBtn = document.querySelector(".play-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");
  const infoDisplay = document.querySelector(".info-display");
  const computerMoveDisplay = document.querySelector(".computer-move");
  const playerMoveDisplay = document.querySelector(".player-move");
  const roundDisplay = document.querySelector(".round-display");
  const scoreDisplay = document.querySelector(".score-display");

  function initEventListeners(app) {
    playBtn.addEventListener("click", app.onPlayClick);
    resetBtn.addEventListener("click", app.onResetClick);
    moveBtns.forEach(btn => {
      btn.addEventListener("click", app.onMoveClick);
    });
  }

  function setGameOverDisplay(winner) {
    const winMessage = `${winner} wins the game!
    Game Over`;

    hideAll(moveBtns);
    infoDisplay.textContent = winMessage;
    resetBtn.style.display = "none";
    playBtn.style.display = "inline-block";
  }

  function resetDisplay() {
    hideAll(moveBtns);
    resetBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    computerMoveDisplay.textContent = "";
    playerMoveDisplay.textContent = "";
    roundDisplay.textContent = "";
    infoDisplay.textContent = "click \"play\" to start a new game";
    scoreDisplay.textContent = "00 - 00";
  } 

  function displayPlayResults({playerMove, computerMove, draw, winner, score}) {
    const resultMessage = 
      draw ? "it's a draw !" :
      winner == "player" ? "Player wins this round !" :
      "Evil wins this round !";

    playerMoveDisplay.textContent = `${playerMove} !`;
    computerMoveDisplay.textContent = `${computerMove} !`;
    infoDisplay.textContent = resultMessage;
    scoreDisplay.textContent = score;
  }

  function setNewGameDisplay() {
    showAll(moveBtns);
    playBtn.style.diplay = "none";
    resetBtn.style.display = "inline-block";
    computerMoveDisplay.textContent = "";
    playerMoveDisplay.textContent = "";
    infoDisplay.textContent = "choose your move";
    roundDisplay.textContent = "Round 01";
    scoreDisplay.textContent = "00 - 00";
  }

  function displayNewRound(round) {
    roundDisplay.textContent = `Round ${round}`;
  }

  function hideAll(elements) {
    elements.forEach(element => {
      element.style.visibility = "hidden";
    })
  }

  function showAll(elements) {
    elements.forEach(element => {
      element.style.visibility = "visible";
    })
  }

  return {
    initEventListeners,
    setGameOverDisplay,
    displayPlayResults,
    resetDisplay,
    setNewGameDisplay,
    displayNewRound,
  };
})();