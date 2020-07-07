import roundManager from "/scripts/roundManager.js";

const scoreManager = (function() {
  
  function getComputerScore() {
    return sessionStorage.getItem("computerScore");
  }

  function getPlayerScore() {
    return sessionStorage.getItem("playerScore");
  }

  function getScore() {
    const playerScore = getPlayerScore();
    const computerScore = getComputerScore();
  
    return [playerScore, computerScore];
  }

  function resetScore() {
    sessionStorage.setItem("playerScore", 0);
    sessionStorage.setItem("computerScore", 0);
  }

  function setComputerScore(n) {
    sessionStorage.setItem("computerScore", n);
  }

  function setPlayerScore(n) {
    sessionStorage.setItem("playerScore", n);
  }

  function setScore(winner) { 
    if (winner === "player") {
      setPlayerScore(+getPlayerScore() + 1)
    }
    if (winner === "computer") {
      setComputerScore(+getComputerScore() + 1)
    }
  }

  return {
    getComputerScore,
    getPlayerScore,
    getScore,
    resetScore,
    setComputerScore,
    setPlayerScore,
    setScore
  };
})();


export default scoreManager;
