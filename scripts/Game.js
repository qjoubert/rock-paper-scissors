import Play from "/scripts/Play.js";
import Round from "/scripts/Round.js";
import Score from "/scripts/Score.js";

class Game {

  play = () => {
    Round.setRoundNumber();
  
    const playResults = Play.getPlayResults();
  
    Score.setScore(playResults[2]);
    Round.showRoundResults(playResults);
    Score.showScore();
  }

  resetGame() {
    Round.resetRound();
    Score.resetScore();
  }
}

export default new Game;
