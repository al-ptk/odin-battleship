import boardContainer from './boardContainer';
import boardRenderer from './boardRenderer';
import { range } from '../zonks';

const boardLen = 10;
const shipIndexes = [];
const shipsToAppend = [];

export default function setupBoard() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'setup-board';
  container.style.paddingTop = '20vh';

  const board = boardRenderer();
  for (const node of board.childNodes) {
    node.addEventListener('click', (e) => {
      const idx = parseInt(e.target.id.slice(1));
      const size = 3;
      const orientation = true;
      const span = range(idx, size, orientation * boardLen);
      const valid = orientation ? verValid(span) : horValid(span);
      if (!valid) return;
      if (spotTaken(span)) {
        console.log('taken');
        return
      }
      shipIndexes.push(...span)
      console.log(span)
    });
  }
  container.appendChild(board);

  return container;
}

function spotTaken (span) {
  const anyTaken = span.filter(elem => shipIndexes.includes(elem));
  return anyTaken.length;
}

function horValid(span) {
  const org = Math.trunc(span[0] / boardLen);
  return span.reduce(
    (curr, next) => Math.trunc(next / boardLen) === org && curr,
    true
  );
}

function verValid(span) {
  return span.reduce((curr, next) => next / boardLen < boardLen && curr, true);
}

/*

select ship to place:
   Once I click on a ship of a certain size, it stays highlighted
   to indicated that the ship selected is the one being placed
   If you ran out of ships of that size, it immediatly unfocus\blurs

Clicking on a empty cell removes a ship and updates ship count
Clicking on a ship removes a ship and updates ship count

Click the oriention toggle button for horizontal \ vertical boats

*/
