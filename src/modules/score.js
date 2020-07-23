
export default (function() {

  function get(player) {
    return sessionStorage.getItem(`${player}Score`);
  }

  function getFormatted() {
    const playerScore = get("player");
    const computerScore = get("computer");

    return `${playerScore.padStart(2, "0")} - ${computerScore.padStart(2, "0")}`;
  }

  function reset() {
    set("player", 0);
    set("computer", 0);
  }

  function set(player, num = null) { 
    const score = num ?? +get(player) + 1;
    sessionStorage.setItem(`${player}Score`, score);
  }

  return {
    get,
    getFormatted,
    reset,
    set,
  };
})();
