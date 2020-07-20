
export default (function() {

  const roundDisplay = document.querySelector("#round-display");

  function clearRound() {
    roundDisplay.textContent = "";
  }

  function _getRound() {
    return sessionStorage.getItem("round");
  }

  function resetRound() {
    sessionStorage.setItem("round", 1);
  }
  
  function setRound(n = null) {
    let currentRound = +_getRound();  
    let newRound = currentRound ? currentRound + 1 : 1;

    sessionStorage.setItem("round", n || newRound);
  }

  function showRound() {
    const round = _getRound().padStart(2, "0");
    roundDisplay.textContent = `Round ${round}`;
  }

  return {
    clearRound,
    resetRound,
    setRound,
    showRound
  };
})();
