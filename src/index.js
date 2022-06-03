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

  function resetGame() {
    players.splice(0, players.length);
    a.push(playerFactory(10), playerFactory(10));
    currentPlayer = false;
  }

  function registerAttack(idx) {
    players[currentPlayer].receiveAttack(idx);
    if (players[currentPlayer].allShipsSunk()) {
      console.log('game over');
    }
    currentPlayer = !currentPlayer;
  }

  function setAiPlayer() {
    player2ai = true;
    players[1].setRandomBoard();
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

  return {
    resetGame,
    registerAttack,
    setAiPlayer,
    puppeteer,
  };
})();

game.puppeteer('title-screen');
