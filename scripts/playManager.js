
const playManager = (function() {

  function getPlayResults(event) {
    const playerPlay = event.target.dataset.move;
    const computerPlay = this.getComputerPlay();
    let winner;
    
    if (playerPlay === computerPlay) {
      winner = "draw";
    } 
    else if (
      playerPlay == "rock" && computerPlay == "scissors" ||
      playerPlay == "scissors" && computerPlay == "paper" ||
      playerPlay == "paper" && computerPlay == "rock"
    ) {
      winner = "player";
    } 
    else {
      winner = "computer";
    }
      
    return [playerPlay, computerPlay, winner];
  }
    
  function getComputerPlay() {
    const randomNum = Math.floor(Math.random() * 3);
    
    let computerPlay = 
      (randomNum === 0) ? 'rock' :
      (randomNum === 1) ? 'paper' : 
      'scissors';
    
    return computerPlay;
  }

  return {
    getPlayResults,
    getComputerPlay
  }
})();

export default playManager;