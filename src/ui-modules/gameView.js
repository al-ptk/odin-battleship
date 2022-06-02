import boardContainer from './boardContainer';
import gameOverModal from './gameOverModal';

export default function gameView(puppeteer) {
  const container = document.createElement('div');
  container.id = 'game-view';

  container.appendChild(boardContainer(puppeteer, true));
  // container.appendChild(boardContainer(puppeteer, false));
  // container.appendChild(gameOverModal(puppeteer));

  return container;
}
