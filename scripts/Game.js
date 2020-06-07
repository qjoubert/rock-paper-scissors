import Play from "/scripts/Play.js";
import Round from "/scripts/Round.js";
import Score from "/scripts/Score.js";

class Game {

  checkWinner() {
    const playerScore = Score.getPlayerScore();
    const computerScore = Score.getComputerScore();

    if (playerScore == 3) return "player";
    if (computerScore == 3) return "computer";
    return false;
  }

  play = () => {
    Round.setRoundNumber();
  
    const playResults = Play.getPlayResults();
  
    Score.setScore(playResults[2]);
    const hasWinner = this.checkWinner();
    Round.showRoundResults(playResults);

    if (playResults[2] != "draw") Score.showScore();
    if (hasWinner) this.showWinner(hasWinner);
  }

  resetGame() {
    Round.resetRound();
    Score.resetScore();
  }

  showWinner(winner) {
    console.log(`
     ${winner} won three rounds!
     ${winner} wins the game!
     Game Over
    `);
  }
}

export default new Game;
