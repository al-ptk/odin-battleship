import boardContainer from './boardContainer';
import boardRenderer from './boardRenderer';
import { range } from '../zonks';
import { shipIcon } from './renderState';

const boardLen = 10;
const shipBucket = {};

export default function setupBoard() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'setup-board';
  container.style.paddingTop = '20vh';

  // Orientation button
  const toggle = document.createElement('button');
  toggle.classList.add('toggle-orientation');
  toggle.value = false;
  toggle.textContent = 'Hor';
  toggle.style.backgroundColor = 'violet';
  toggle.addEventListener('click', (e) => {
    if (e.target.value === 'false') {
      e.target.value = true;
      e.target.textContent = 'Ver';
      e.target.style.backgroundColor = 'lightgreen';
    } else {
      e.target.value = false;
      e.target.textContent = 'Hor';
      e.target.style.backgroundColor = 'violet';
    }
  });
  container.appendChild(toggle);

  // Board configurations;
  const board = boardRenderer();
  for (const node of board.childNodes) {
    node.addEventListener('click', (e) => {
      const idx = parseInt(e.target.id.slice(1));
      const size = 3;
      const orientation = toggle.value === 'false' ? false : true;
      const span = range(idx, size, orientation * boardLen);
      const valid = orientation ? verValid(span) : horValid(span);
      if (!valid) return;
      if (spotTaken(span)) {
        console.log('taken');
        return;
      }
      Object.assign(
        shipBucket,
        Object.fromEntries(span.map((elem) => [elem, [span]]))
      );
      console.log(shipBucket);
      renderShip(span);
    });
  }
  container.appendChild(board);

  return container;
}

function spotTaken(span) {
  const anyTaken = span.filter((elem) =>
    Object.keys(shipBucket).includes(elem.toString())
  );
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

function renderShip(span) {
  const orientation = span[0] % boardLen === span[1] % boardLen;

  for (let i = 0; i < span.length; i++) {
    const cell = document.querySelector(`#c${span[i]}`);
    cell.style.position = 'relative';
    const startTip = i === 0;
    const endTip = i === span.length - 1;
    const img = shipIcon(startTip | endTip, endTip, orientation);
    img.style.position = 'absolute';
    img.style.zIndex = '5';
    cell.appendChild(img);
  }
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
