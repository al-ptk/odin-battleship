import fancyButton from './fancyButton';
import gameOverModal from './gameOverModal';
import boardRenderer from './boardRenderer';
import { renderShips, renderShots } from './renderState';

export default function boardContainer(owner, game) {
  const container = document.createElement('div');
  container.id = 'game-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '15vh',
    flex: '0 0 auto',
  });

  const btn = fancyButton();
  btn.style.height = '52px';
  const ownership = owner ? "my board." : 'my enemy\'s board';
  btn.textContent = ownership;
  container.appendChild(btn);

  const board = boardRenderer(game);
  if (!owner) {
    for (const cell of board.children) {
      cell.addEventListener('click', (e) => {
        const idx = e.target.id.slice(1);
        game.registerAttack(parseInt(idx));
        renderShots(board, game.getEnemyData().marks);
        game.cyclePlayer();
        container.parentNode.remove();
        game.puppeteer('next-player');
      });
    }
    renderShots(board, game.getEnemyData().marks);
  } else {
    renderShots(board, game.getCurrentData().marks);
    renderShips(board, game.getCurrentData().ships);
  }
  container.appendChild(board);

  return container;
}
