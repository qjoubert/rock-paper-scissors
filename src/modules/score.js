
export default (function() {

  function get(player, format = null) {
    const score = sessionStorage.getItem(`${player}Score`);

    if (format == "padded") {
      return score.padStart(2, "0");
    }

    return score;
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
    reset,
    set,
  };
})();
