import style from './stylesheets/index.css';
import nextPlayer from './ui-modules/nextPlayer';
import pickPlayersScreen from './ui-modules/pickPlayers';
import titleScreen from './ui-modules/titleScreen';
import setupPrompt from './ui-modules/setupPrompt';
import gameView from './ui-modules/gameView';

const root = document.querySelector('#app');

puppeteer('game-view');

function puppeteer(screen, args) {
  switch (screen) {
    case 'title-screen':
      root.appendChild(titleScreen(puppeteer));
      break;

    case 'pick-players':
      root.appendChild(pickPlayersScreen(puppeteer));
      break;

    case 'next-player':
      root.appendChild(nextPlayer(puppeteer));
      break;

    case 'game-view':
      root.appendChild(gameView(puppeteer, true));
      break;

    case 'setup-prompt':
      root.appendChild(setupPrompt());
      break;
  }
}
