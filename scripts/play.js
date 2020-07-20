
export default (function() {

  function checkDraw(playerPlay, computerPlay) {
    return playerPlay === computerPlay;
  }

  function getPlayWinner(playerPlay, computerPlay) {
    let winner;
    
    if (
      playerPlay == "rock" && computerPlay == "scissors" ||
      playerPlay == "scissors" && computerPlay == "paper" ||
      playerPlay == "paper" && computerPlay == "rock"
    ) {
      winner = "player";
    } else {
      winner = "computer";
    }
      
    return winner;
  }
    
  function getComputerPlay() {
    const randomNum = Math.floor(Math.random() * 3);
    
    let computerPlay = 
      randomNum === 0 ? "rock" :
      randomNum === 1 ? "paper" : 
      "scissors";
    
    return computerPlay;
  }

  function getPlayerPlay(e) {
    return e.target.dataset.move;
  }

  return {
    checkDraw,
    getPlayerPlay,
    getComputerPlay,
    getPlayWinner
  }
})();
