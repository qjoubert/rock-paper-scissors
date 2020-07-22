
export default (function() {

  function get(format = null) {
    const round = sessionStorage.getItem("round");
    
    if (format == "padded") {
      return round.padStart(2, "0")
    }

    return round;
  }

  function reset() {
    sessionStorage.setItem("round", 1);
  }
  
  function set(num = null) {
    const current = +get();  
    const round = 
      num ? num : 
      current ? (current + 1) : 
      1;

    sessionStorage.setItem("round", round);
  }

  return {
    get,
    reset,
    set
  };
})();
