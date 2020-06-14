import Play from "/scripts/Play.js";
import Round from "/scripts/Round.js";
import Score from "/scripts/Score.js";

class Game {

  ableMoveBtns() {
    const btns = [...document.getElementsByClassName("move-button")];
    btns.forEach(btn => { 
      btn.removeAttribute("disabled");
    });
  }

  checkWinner() {
    const playerScore = Score.getPlayerScore();
    const computerScore = Score.getComputerScore();

    if (playerScore == 3) return "player";
    if (computerScore == 3) return "computer";
    return false;
  }

  clearWinnerDisplay() {
    document.getElementById("winner-display").innerHTML = "";
  }
  
  disableMoveBtns() {
    const btns = [...document.getElementsByClassName("move-button")];
    btns.forEach(btn => { 
      btn.setAttribute("disabled", true);
    });
  }

  onPlayBtnClick = (e) => {
    this.ableMoveBtns();
    this.resetGame(e);
  };

  play = (e) => {
    Round.setRoundNumber();
    const playResults = Play.getPlayResults(e);  
    Score.setScore(playResults[2]);
    const hasWinner = this.checkWinner();
    Round.showRoundResults(playResults);
    Score.showScore();

    if (hasWinner) {
      this.showWinner(hasWinner);
      this.resetGame(e);
    }
  };

  resetGame = (e) => {
    if (e && e.target.id === "reset-button" || e.target.id === "play-button") {
      Round.clearResultsDisplay();
      Score.clearScoreDisplay();
      this.clearWinnerDisplay();
    }

    if (e && e.target.id !== "play-button") this.disableMoveBtns();
    Round.resetRound();
    Score.resetScore();
  };

  showWinner(winner) {
    const winnerDisplayDiv = document.getElementById("winner-display");

    winnerDisplayDiv.innerHTML = (`
     ${winner} won three rounds!
     ${winner} wins the game!
     Game Over
    `);
  }
}

export default new Game;
