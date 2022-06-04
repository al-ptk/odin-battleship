import style from './stylesheets/index.css';
import nextPlayer from './ui-modules/nextPlayer';
import pickPlayersScreen from './ui-modules/pickPlayers';
import titleScreen from './ui-modules/titleScreen';
import setupPrompt from './ui-modules/setupPrompt';
import gameView from './ui-modules/gameView';
import setupBoard from './ui-modules/setupBoard';
import playerFactory from './logic-modules/playerFactory';
import { renderShots, renderShips } from './ui-modules/renderState';

const root = document.querySelector('#app');

const game = (function () {
  const players = [playerFactory(10), playerFactory(10)];
  let currentPlayer = false; // There will only be 2 players, so bool works fine
  let player2ai = false;

  players[1].deployShip(0, false, 1);

  function resetGame() {
    players.splice(0, players.length);
    a.push(playerFactory(10), playerFactory(10));
    currentPlayer = false;
  }

  function registerAttack(idx) {
    players[!currentPlayer * 1].receiveAttack(idx);
    const wincon =
      players[!currentPlayer * 1].getSunkShips().length ===
      players[!currentPlayer * 1].peekAtShips().length;
    return wincon;
  }

  function setAiPlayer() {
    player2ai = true;
    players[1].setRandomBoard();
  }

  function isAiPlaying() {
    
  }

  function puppeteer(screen) {
    switch (screen) {
      case 'title-screen':
        root.appendChild(titleScreen(game));
        break;

      case 'pick-players':
        root.appendChild(pickPlayersScreen(game));
        break;

      case 'game-view':
        root.appendChild(gameView(game));
        break;

      case 'next-player':
        root.appendChild(nextPlayer(game));
        break;

      case 'setup-prompt':
        root.appendChild(setupPrompt(game));
        break;

      case 'setup-board':
        root.appendChild(setupBoard(game));
        break;
    }
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function cyclePlayer() {
    currentPlayer = !currentPlayer;
  }

  function deployAllShips(shipsToBeDeployed) {
    let weirdIndexFix = currentPlayer + 1 - 1;
    for (const ship of shipsToBeDeployed) {
      players[weirdIndexFix].deployShip(...ship);
    }
  }

  function getCurrentData() {
    return {
      ships: players[currentPlayer + 1 - 1].peekAtShips(),
      marks: players[currentPlayer + 1 - 1].getMarkedCells(),
      sunk: players[currentPlayer + 1 - 1].getSunkShips(),
    };
  }

  function getEnemyData() {
    return {
      ships: players[!currentPlayer + 1 - 1].peekAtShips(),
      marks: players[!currentPlayer + 1 - 1].getMarkedCells(),
      sunk: players[!currentPlayer + 1 - 1].getSunkShips(),
    };
  }

  return {
    resetGame,
    registerAttack,
    setAiPlayer,
    puppeteer,
    getCurrentPlayer,
    deployAllShips,
    getCurrentData,
    getEnemyData,
    cyclePlayer,
  };
})();

game.puppeteer('next-player');
