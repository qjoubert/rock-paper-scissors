
export default (function() {

  const playBtn = document.querySelector(".play-btn");
  const resetBtn = document.querySelector(".reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");
  const infoDisplay = document.querySelector(".info-display");
  const computerMoveDisplay = document.querySelector(".computer-move");
  const playerMoveDisplay = document.querySelector(".player-move");
  const roundDisplay = document.querySelector(".round-display");
  const scoreDisplay = document.querySelector(".score-display");

  function displayPlayResults({playerMove, computerMove, draw, winner, score}) {
    const resultMessage = 
      draw ? "égalité !" :
      winner == "player" ? "Player 1 remporte cette manche !" :
      "Evil Robot remporte cette manche !";

    playerMoveDisplay.textContent = `${playerMove} !`;
    computerMoveDisplay.textContent = `${computerMove} !`;
    infoDisplay.textContent = resultMessage;
    scoreDisplay.textContent = score;
  }

  function displayNewRound(round) {
    roundDisplay.textContent = `Round ${round}`;
  }

  function hideAll(elements) {
    elements.forEach(element => {
      element.style.visibility = "hidden";
    })
  }

  function initEventListeners(app) {
    playBtn.addEventListener("click", app.onPlayClick);
    resetBtn.addEventListener("click", app.onResetClick);
    moveBtns.forEach(btn => {
      btn.addEventListener("click", app.onMoveClick);
    });
  }

  function setGameOverDisplay(winner) {
    const winMessage = `${winner == "player" ? "Player 1" : "Evil Robot"} gagne la partie !
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
    infoDisplay.textContent = "cliquez sur \"start\" pour commencer une nouvelle partie";
    scoreDisplay.textContent = "00 - 00";
    scoreDisplay.style.visibility = "hidden";
  } 

  function setNewGameDisplay() {
    showAll(moveBtns);
    playBtn.style.diplay = "none";
    resetBtn.style.display = "inline-block";
    computerMoveDisplay.textContent = "";
    playerMoveDisplay.textContent = "";
    infoDisplay.textContent = "choisissez votre mouvement";
    roundDisplay.textContent = "Round 01";
    scoreDisplay.textContent = "00 - 00";
    scoreDisplay.style.visibility = "visible";
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