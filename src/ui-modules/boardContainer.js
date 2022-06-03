import fancyButton from './fancyButton';
import gameOverModal from './gameOverModal';
import boardRenderer from './boardRenderer';

export default function boardContainer(puppeteer, owner, args) {
  const container = document.createElement('div');
  container.id = 'game-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '15vh',
    flex: '0 0 auto',
  });

  // The default view is of the opponents's board,
  // and you must navigate to your own later
  // Even though, after setting up board,
  // the view will scroll from the player's board to the enemy's
  const ownership = owner ? 'to my board. »' : "« to enemy's board.";

  const btn = fancyButton();
  btn.style.height = '52px';
  btn.textContent = ownership;
  container.appendChild(btn);

  const board = boardRenderer(args);
  container.appendChild(board);

  return container;
}
