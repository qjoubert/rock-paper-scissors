
export default (function() {

  const roundDisplay = document.querySelector("#round-display");

  function clearRound() {
    roundDisplay.textContent = "";
  }

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

  function showRound() {
    const round = getRound().padStart(2, "0");
    roundDisplay.textContent = `Round ${round}`;
  }

  return {
    clearRound,
    getRound,
    resetRound,
    restartRound,
    setRound,
    showRound
  };
})();
