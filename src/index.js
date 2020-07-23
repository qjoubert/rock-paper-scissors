import "./css/style.css";
import game from "./modules/game";

(function() {
  const playBtn = document.querySelector("#play-btn");
  const resetBtn = document.querySelector("#reset-btn");
  const moveBtns = document.querySelectorAll(".move-btn");

  playBtn.addEventListener("click", game.onPlayClick);
  resetBtn.addEventListener("click", game.onResetClick);

  moveBtns.forEach(btn => {
    btn.addEventListener("click", game.onMoveClick);
  });
})();
