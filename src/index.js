import style from './stylesheets/index.css';

import nextPlayer from './ui-modules/nextPlayer';
import pickPlayersScreen from './ui-modules/pickPlayers';
import boardContainer from './ui-modules/boardContainer';
import titleScreen from './ui-modules/titleScreen';
import setupPrompt from './ui-modules/setupPrompt';

const root = document.querySelector('#app');

puppeteer('board-container');

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
      root.appendChild(boardContainer(puppeteer, true));
      root.appendChild(boardContainer(puppeteer, false));
      break;

    case 'setup-prompt':
      root.appendChild(setupPrompt());
      break;
  }
}
