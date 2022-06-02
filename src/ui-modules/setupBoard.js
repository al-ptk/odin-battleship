import boardContainer from './boardContainer';
import boardRenderer from './boardRenderer';

export default function setupBoard() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'setup-board';
  container.style.paddingTop = '20vh';

  const board = boardRenderer();
  container.appendChild(board);

  return container;
}


// select ship to place:
//    Once I click on a ship of a certain size, it stays highlighted
//    to indicated that the ship selected is the one being placed
//    If you ran out of ships of that size, it immediatly unfocus\blurs
//
// turn ship
// pick up ship from board
// know how many ships left to place
// undo ship placement
// 
