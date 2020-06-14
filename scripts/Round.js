
class Round {

  clearResultsDisplay() {
    document.getElementById("results-display").innerHTML = "";
  }

  getRoundNumber() {
    return +sessionStorage.getItem("round");
  }

  resetRound() {
    sessionStorage.setItem("round", 0);
  }
  
  restartRound(roundNumber) {
    sessionStorage.setItem("round", roundNumber - 1);
  }
  
  setRoundNumber(n) {
    let currentRoundNumber = this.getRoundNumber();  
    let newRoundNumber = !currentRoundNumber ? 1 : currentRoundNumber + 1;

    sessionStorage.setItem("round", n || newRoundNumber);
  }
    
  showRoundResults(results) {
    const resultsDisplayDiv = document.getElementById("results-display");

    const playerPlay = results[0];
    const computerPlay = results[1];
    const playResult = results[2];
  
    const winnerText = 
      playResult == "draw" ? "it's a draw, this round counts for nothing" :
      playResult == "player" ? "Player wins this round!" :
      "Computer wins this round!";
  
    const message = `Player played ${playerPlay} and Computer played ${computerPlay} : 
    ${winnerText}`;
  
    resultsDisplayDiv.innerHTML  = message;
  }
}

export default new Round;