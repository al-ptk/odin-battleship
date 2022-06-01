import fancyButton from './fancyButton';

export default function boardContainer() {
  const container = document.createElement('div');
  container.id = 'game-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '15vh',
    flex: '0 0 auto',
  });

  const btn = fancyButton();
  btn.style.height = '52px';
  btn.textContent = 'to my board. »';
  container.appendChild(btn);

  const board = playerBoard();

  container.appendChild(board);

  // const btn2 = fancyButton();
  // btn2.style.height = '52px';
  // btn2.textContent = '« to enemy\'s board.';
  // container.appendChild(btn2);

  return container;
}

function playerBoard() {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    container.appendChild(cell);
  }

  return container;
}
