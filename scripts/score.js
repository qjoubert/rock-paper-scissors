
export default (function() {

  const scoreDisplay = document.querySelector("#score-display")

  function _setComputerScore(n) {
    sessionStorage.setItem("computerScore", n);
  }

  function _setPlayerScore(n) {
    sessionStorage.setItem("playerScore", n);
  }

  function clearScore() {
    scoreDisplay.textContent = "00 - 00";
  }
  
  function getComputerScore() {
    return sessionStorage.getItem("computerScore");
  }

  function getPlayerScore() {
    return sessionStorage.getItem("playerScore");
  }

  function resetScore() {
    _setComputerScore(0);
    _setPlayerScore(0);
  }

  function setScore(winner) { 
    if (winner === "player") {
      _setPlayerScore(+getPlayerScore() + 1);
    }
    if (winner === "computer") {
      _setComputerScore(+getComputerScore() + 1)
    }
  }

  function showScore() {
    const playerScore = getPlayerScore().padStart(2, "0");
    const computerScore = getComputerScore().padStart(2, "0");

    scoreDisplay.textContent = `${playerScore} - ${computerScore}`;
  }

  return {
    clearScore,
    getComputerScore,
    getPlayerScore,
    resetScore,
    setScore,
    showScore
  };
})();
