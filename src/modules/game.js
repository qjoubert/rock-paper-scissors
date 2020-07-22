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

    const playerScore = score.get("player", "padded");
    const computerScore = score.get("computer", "padded");
    const scoreString = `${playerScore} - ${computerScore}`;

    dom.printPlayResults({...results, score: scoreString});
    
    if (_checkWinner()) {
      _gameOver();
    } else {
      round.set();
      dom.setNewRound(round.get("padded"));
    }
  }

  function resetGame(e) {
    round.reset();
    score.reset();
    dom.reset(e);
  }  
  
  function setNewGame() {
    dom.setNewGame();
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
    resetGame,
    setNewGame
  };
})(); 
