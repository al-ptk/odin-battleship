import fancyButton from './fancyButton';
import gameOverModal from './gameOverModal';
import boardRenderer from './boardRenderer';
import { renderShips } from './renderState';

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
  const ownership = owner ? 'to my board. »' : "« to enemy's board.";
  btn.textContent = ownership;
  btn.addEventListener('click', (e) => {
    container.parentNode.style.transform = "translateX(300px)";
  });
  container.appendChild(btn);



  const board = boardRenderer(game);
  board.classList.add(owner ? 'owner' : 'enemy')
  renderShips(board, game.getPlayerShips());
  container.appendChild(board);

  return container;
}
