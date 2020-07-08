
import gameManager from "/scripts/gameManager.js";

const eventManager = (function() {

  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");

  function addAllEventListeners() {
    listen(playBtn, "click", (e) => {
      gameManager.resetGame(e);
      gameManager.setNewGame();
    });
    listen(resetBtn, "click", gameManager.resetGame);
    listenAll(moveBtns, "click", gameManager.play);
  }

  function listen(target, event, action) {
    target.addEventListener(event, (e) => action(e));
  }

  function listenAll(targets, event, action) {
    targets.forEach(target => {
      target.addEventListener(event, (e) => action(e))
    });
  }

  return { addAllEventListeners };
})();

export default eventManager;
