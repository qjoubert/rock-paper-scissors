import rockIcon from "../assets/images/rock.png";
import paperIcon from "../assets/images/paper.png";
import scissorsIcon from "../assets/images/scissors.png";

export default (function() {

  const computerMoveDisplay = document.querySelector(".computer-move");
  const infoDisplay         = document.querySelector(".info-display");
  const mainHeading         = document.querySelector("h1");
  const moveBtns            = document.querySelectorAll(".move-btn");
  const moveBtnsContainer   = document.querySelector(".move-btns-container");
  const playBtn             = document.querySelector(".play-btn");
  const playerMoveDisplay   = document.querySelector(".player-move");
  const roundDisplay        = document.querySelector(".round-display");
  const scoreDisplay        = document.querySelector(".score-display");

  function displayPlayResults({playerMove, computerMove, draw, winner, score}) {
    const resultMessage = 
      draw ? "égalité !" :
      winner == "player" ? "Player 1 remporte cette manche !" :
      "Evil Robot remporte cette manche !";

    playerMoveDisplay.src = 
      playerMove == "rock" ? rockIcon :
      playerMove == "paper" ? paperIcon : scissorsIcon;

    computerMoveDisplay.src = 
      computerMove == "rock" ? rockIcon :
      computerMove == "paper" ? paperIcon : scissorsIcon;

    playerMoveDisplay.alt = `an icon representing a ${playerMove}`;
    computerMoveDisplay.alt = `an icon representing a ${computerMove}`;

    scoreDisplay.textContent = score;
    infoDisplay.textContent = resultMessage;
    infoDisplay.style.color = 
      draw ? "#3fdfdf" :
      winner == "player" ? "#86E411" : "#F70D2E";
  }

  function displayNewRound(round) {
    roundDisplay.textContent = `Round ${round}`;
  }

  function initEventListeners(app) {
    playBtn.addEventListener("click", app.onPlayClick);
    moveBtns.forEach(btn => {
      btn.addEventListener("click", app.onMoveClick);
    });
  }

  function setGameOverDisplay(winner) {
    const winMessage = `${winner == "player" ? "Player 1" : "Evil Robot"} gagne la partie !
    Game Over`;

    moveBtnsContainer.style.display = "none";
    playBtn.style.display = "inline-block";
    infoDisplay.textContent = winMessage;
    infoDisplay.style.color = 
      winner == "player" ? "#86E411" : "#F70D2E";
  }

  function setNewGameDisplay() {
    mainHeading.style.display = "none";
    moveBtnsContainer.style.display = "flex";
    playBtn.style.display = "none";
    computerMoveDisplay.src = "#";
    playerMoveDisplay.src = "#";
    computerMoveDisplay.alt = "";
    playerMoveDisplay.alt = "";
    infoDisplay.textContent = "choisissez votre mouvement";
    infoDisplay.style.color = "white";
    roundDisplay.textContent = "Round 01";
    scoreDisplay.textContent = "00 - 00";
    roundDisplay.style.display = "block";
    scoreDisplay.style.display = "block";
  }

  return {
    initEventListeners,
    setGameOverDisplay,
    displayPlayResults,
    setNewGameDisplay,
    displayNewRound,
  };
})();