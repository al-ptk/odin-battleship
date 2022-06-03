import boardContainer from './boardContainer';
import gameOverModal from './gameOverModal';

export default function gameView(game) {
const container = document.createElement('div');
  container.id = 'game-view';

  container.appendChild(boardContainer(true, game));
  container.appendChild(boardContainer(false, game));

  return container;
}
