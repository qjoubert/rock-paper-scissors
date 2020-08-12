import dom from "./dom";
import play from "./play";
import round from "./round";
import score from "./score";

export default (function() {

  function checkWinner() {
    return ( 
      score.get("player") == 3 || 
      score.get("computer") == 3
    );
  }

  function gameOver() {
    const winner = getWinner();
    dom.setGameOverDisplay(winner);
  }

  function getWinner() {
    if (score.get("player") == 3) return "player";
    if (score.get("computer") == 3) return "evil";
    return null;
  }

  function onMoveClick(e) {
    const results = play.getResults(e);
    
    if (!results.draw) {
      score.set(results.winner);
    }

    const formattedScore = score.getFormatted();
    dom.displayPlayResults({...results, score: formattedScore});
    
    if (checkWinner()) gameOver();
    else {
      round.set();
      dom.displayNewRound(round.get("padded"));
    }
  }

  function onPlayClick() {
    round.reset();
    score.reset();
    dom.setNewGameDisplay();
  }

  return {
    onMoveClick,
    onPlayClick,
  };
})(); 
