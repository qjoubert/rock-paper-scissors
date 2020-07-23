
export default (function() {

  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");
  const infoDisplay = document.querySelector("#info-display");
  const computerMoveDisplay = document.querySelector("#computer-move");
  const playerMoveDisplay = document.querySelector("#player-move");
  const roundDisplay = document.querySelector("#round-display");
  const scoreDisplay = document.querySelector("#score-display");

  function gameOver(winner) {
    const winMessage = `${winner} wins the game!
    Game Over`;

    _print(infoDisplay, winMessage);
    _hideAll(moveBtns);
    _remove(resetBtn);
    _display(playBtn);
  }

  function reset() {
    _clear(computerMoveDisplay);
    _clear(playerMoveDisplay);
    _clear(roundDisplay);
    _remove(resetBtn);
    _display(playBtn);
    _hideAll(moveBtns);
    _print(infoDisplay, 'click "play" to start a new game');
    _print(scoreDisplay, "00 - 00");
  } 

  function printPlayResults({playerMove, computerMove, draw, winner, score}) {
    const resultMessage = 
      draw ? "it's a draw !" :
      winner == "player" ? "Player wins this round !" :
      "Evil wins this round !";

    _print(playerMoveDisplay, `${playerMove} !`);
    _print(computerMoveDisplay, `${computerMove} !`);
    _print(infoDisplay, resultMessage);
    _print(scoreDisplay, score);
  }

  function setNewGame() {
    _clear(computerMoveDisplay);
    _clear(playerMoveDisplay);
    _remove(playBtn);
    _display(resetBtn);
    _showAll(moveBtns);
    _print(infoDisplay, "choose your move");
    _print(roundDisplay, "Round 01");
    _print(scoreDisplay, "00 - 00");
  }

  function setNewRound(round) {
    _print(roundDisplay, `Round ${round}`);
  }

  function _clear(element) {
    element.textContent = "";
  }

  function _clearAll(elements) {
    elements.forEach(element => {
      element.textContent = "";
    });
  }

  function _display(element, displayVal = "inline-block") {
    element.style.display = displayVal;
  }

  function _displayAll(elements, displayVal = "inline-block") {
    elements.forEach(element => {
      element.style.display = displayVal;
    })
  }

  function _hide(element) {
    element.style.visibility = "hidden";
  }

  function _hideAll(elements) {
    elements.forEach(element => {
      element.style.visibility = "hidden";
    })
  }

  function _print(element, text) {
    element.textContent = text;
  }

  function _remove(element) {
    element.style.display = "none";
  }

  function _removeAll(elements) {
    elements.forEach(element => {
      element.style.display = "none";
    });
  }

  function _show(element) {
    element.style.visibility = "visible";
  }

  function _showAll(elements) {
    elements.forEach(element => {
      element.style.visibility = "visible";
    })
  }

  return {
    gameOver,
    printPlayResults,
    reset,
    setNewGame,
    setNewRound
  };
})();