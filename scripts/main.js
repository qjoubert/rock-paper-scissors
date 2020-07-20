
import game from "/scripts/game.js";

(function() {
  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");

  playBtn.addEventListener("click", (e) => {
    game.resetGame(e);
    game.setNewGame();
  });

  resetBtn.addEventListener("click", game.resetGame);

  moveBtns.forEach(btn => {
    btn.addEventListener("click", game.onMoveClick);
  })
})();
