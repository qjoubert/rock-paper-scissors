"use strict";

import Game from "/scripts/Game.js";

const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");
const moveBtns = [...document.getElementsByClassName("move-button")];

playButton.addEventListener("click", Game.onPlayBtnClick);
resetButton.addEventListener("click", Game.resetGame);

moveBtns.forEach(btn => {
  btn.addEventListener("click", Game.play);
})
