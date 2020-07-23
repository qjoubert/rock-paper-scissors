import dom from "./dom";
import play from "./play";
import round from "./round";
import score from "./score";

export default (function() {

  function onMoveClick(e) {
    const results = play.getResults(e);
    
    if (!results.draw) {
      score.set(results.winner);
    }

    const formattedScore = score.getFormatted();
    dom.printPlayResults({...results, score: formattedScore});
    
    if (_checkWinner()) _gameOver();
    else {
      round.set();
      dom.setNewRound(round.get("padded"));
    }
  }

  function onPlayClick() {
    round.reset();
    score.reset();
    dom.setNewGame();
  }

  function onResetClick() {
    round.reset();
    score.reset();
    dom.reset();
  }
  
  function _checkWinner() {
    return ( 
      score.get("player") == 3 || 
      score.get("computer") == 3
    );
  }

  function _gameOver() {
    const winner = _getWinner();
    dom.gameOver(winner);
  }

  function _getWinner() {
    if (score.get("player") == 3) return "player";
    if (score.get("computer") == 3) return "evil";
    return null;
  }

  return {
    onMoveClick,
    onPlayClick,
    onResetClick,
  };
})(); 
