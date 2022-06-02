import style from './stylesheets/index.css';

import nextPlayer from './ui-modules/nextPlayer';
import pickPlayersScreen from './ui-modules/pickPlayers';
import boardContainer from './ui-modules/boardContainer';
import titleScreen from './ui-modules/titleScreen';
import setupPrompt from './ui-modules/setupPrompt';

const root = document.querySelector('#app');

puppeteer('setup-prompt');

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

    case 'board-container':
      root.appendChild(nextPlayer(puppeteer, true));
      break;

    case 'setup-prompt':
      root.appendChild(setupPrompt());
      break;
  }
}
