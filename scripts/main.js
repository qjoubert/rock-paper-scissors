
import gameManager from "/scripts/gameManager.js";

(function() {
  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");

  playBtn.addEventListener("click", (e) => {
    gameManager.resetGame(e);
    gameManager.setNewGame();
  });

  resetBtn.addEventListener("click", gameManager.resetGame);

  moveBtns.forEach(btn => {
    btn.addEventListener("click", gameManager.play);
  })
})();
