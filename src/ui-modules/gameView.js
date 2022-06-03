import boardContainer from './boardContainer';
import gameOverModal from './gameOverModal';

export default function gameView(puppeteer, args) {
const container = document.createElement('div');
  container.id = 'game-view';

  container.appendChild(boardContainer(puppeteer, true, args));
  // container.appendChild(boardContainer(puppeteer, false));
  // container.appendChild(gameOverModal(puppeteer));

  return container;
}
