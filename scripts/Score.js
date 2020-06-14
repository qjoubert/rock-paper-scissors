import Round from "/scripts/Round.js";

class Score {

  clearScoreDisplay() {
    document.getElementById("score-display").innerHTML = "";
  }

  getComputerScore() {
    return +sessionStorage.getItem("computerScore");
  }

  getPlayerScore() {
    return +sessionStorage.getItem("playerScore");
  }

  getScore() {
    const playerScore = this.getPlayerScore();
    const computerScore = this.getComputerScore();
  
    return [playerScore, computerScore];
  }

  resetScore() {
    sessionStorage.setItem("playerScore", 0);
    sessionStorage.setItem("computerScore", 0);
  }

  setComputerScore(n) {
    sessionStorage.setItem("computerScore", n);
  }

  setPlayerScore(n) {
    sessionStorage.setItem("playerScore", n);
  }

  setScore(playResult) {
    const roundNumber = Round.getRoundNumber();
    if (roundNumber == 1) this.resetScore();  
    if (playResult == "player") this.setPlayerScore(this.getPlayerScore() + 1);
    if (playResult == "computer") this.setComputerScore(this.getComputerScore() + 1);
  }

  showScore() {
    const scoreDisplayDiv = document.getElementById("score-display");

    const roundNumber = Round.getRoundNumber();
    const playerScore = this.getPlayerScore();
    const computerScore = this.getComputerScore();

    scoreDisplayDiv.innerHTML = (`
      Score for round number ${roundNumber} :
      Player: ${playerScore} - Computer: ${computerScore}
    `);
  }
}

export default new Score;