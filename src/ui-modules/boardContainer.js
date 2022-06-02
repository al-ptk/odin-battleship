import fancyButton from './fancyButton';
import gameOverModal from './gameOverModal';

export default function boardContainer(puppeteer, owner) {
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

  const board = playerBoard();
  container.appendChild(board);

  container.appendChild(gameOverModal());

  return container;
}

function playerBoard() {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.addEventListener('click', e => {
      console.log(i);
    })
    container.appendChild(cell);
  }

  return container;
}
