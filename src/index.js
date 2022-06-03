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
  const boardLen = 10;
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
  }

  return {};
})();

function puppeteer(screen, args) {
  switch (screen) {
    case 'title-screen':
      root.appendChild(titleScreen(puppeteer));
      break;

    case 'pick-players':
      root.appendChild(pickPlayersScreen(puppeteer));
      break;

    case 'game-view':
      root.appendChild(gameView(puppeteer, args));
      break;

    case 'next-player':
      root.appendChild(nextPlayer(puppeteer));
      break;

    case 'setup-prompt':
      root.appendChild(setupPrompt());
      break;

    case 'setup-board':
      root.appendChild(setupBoard());
      break;
  }
}

puppeteer('setup-board', ()=>{});
