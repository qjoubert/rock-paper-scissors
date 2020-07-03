
const roundManager = (function() {

  function getRoundNumber() {
    return +sessionStorage.getItem("round");
  }

  function resetRound() {
    sessionStorage.setItem("round", 0);
  }
  
  function restartRound(roundNumber) {
    sessionStorage.setItem("round", roundNumber - 1);
  }
  
  function setRoundNumber(n = null) {
    let currentRoundNumber = getRoundNumber();  
    let newRoundNumber = !currentRoundNumber ? 1 : currentRoundNumber + 1;

    sessionStorage.setItem("round", n || newRoundNumber);
  }

  return {
    getRoundNumber,
    resetRound,
    restartRound,
    setRoundNumber
  };
})();

export default roundManager;
