"use strict";

import Game from "/scripts/Game.js";

const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", Game.play);
resetButton.addEventListener("click", Game.resetGame);
