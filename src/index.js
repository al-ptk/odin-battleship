import style from './stylesheets/index.css';
import nextPlayer from './ui-modules/nextPlayer';
import pickPlayersScreen from './ui-modules/pickPlayers';
import titleScreen from './ui-modules/titleScreen';
import setupPrompt from './ui-modules/setupPrompt';
import gameView from './ui-modules/gameView';
import setupBoard from './ui-modules/setupBoard';
import playerFactory from './logic-modules/playerFactory';

const root = document.querySelector('#app');

puppeteer('game-view');

function puppeteer(screen, args) {
  switch (screen) {
    case 'title-screen':
      root.appendChild(titleScreen(puppeteer));
      break;

    case 'pick-players':
      root.appendChild(pickPlayersScreen(puppeteer));
      break;

    case 'next-player':
      root.appendChild(nextPlayer(puppeteer));
      break;

    case 'game-view':
      root.appendChild(gameView(puppeteer, true));
      break;

    case 'setup-prompt':
      root.appendChild(setupPrompt());
      break;

    case 'setup-board':
      root.appendChild(setupBoard());
      break;
  }
}

const p1 = playerFactory(10);
p1.setRandomBoard();
for (const ship of p1.peekAtShips()) {
  const orientation = ship.getOrientation();
  const boundaries = ship.getBoundaries();
  for (let i = 0; i < boundaries.length; i++) {
    const cell = document.querySelector(`#c${boundaries[i]}`);
    cell.style.backgroundColor = 'blue';
    if (i === 0) cell.style.backgroundColor = 'yellow';
    if (i === boundaries.length - 1) {
      cell.style.backgroundColor = 'green';
      cell.textContent = "lll";
      cell.style.fontSize = '24px';
    }
    cell.addEventListener('click', (e) => console.log(ship.getBoundaries()));
  }
}
