
const roundManager = (function() {

  function getRound() {
    return sessionStorage.getItem("round");
  }

  function resetRound() {
    sessionStorage.setItem("round", 1);
  }
  
  function restartRound(round) {
    sessionStorage.setItem("round", round - 1);
  }
  
  function setRound(n = null) {
    let currentRound = +getRound();  
    let newRound = currentRound ? currentRound + 1 : 1;

    sessionStorage.setItem("round", n || newRound);
  }

  return {
    getRound,
    resetRound,
    restartRound,
    setRound
  };
})();

export default roundManager;
