import Round from "/scripts/Round.js";
import Score from "/scripts/Score.js";

class Play {

  getPlayResults() {
    const playerPlay = this.getPlayerPlay();
    const computerPlay = this.getComputerPlay();
    let winner;
    
    if (playerPlay == computerPlay) {
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
    
  getComputerPlay() {
    const randomNum = Math.floor(Math.random() * 3);
    
    let computerPlay = 
      (randomNum == 0) ? 'rock' :
      (randomNum == 1) ? 'paper' : 
      'scissors';
    
    return computerPlay;
  }
    
  getPlayerPlay() {
    return prompt("Make Your Play").toLowerCase();  
  }
}

export default new Play;