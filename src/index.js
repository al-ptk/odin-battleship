import style from './stylesheets/index.css';
import battleBoard from './ui-modules/battleBoard';
import nextPlayer from './ui-modules/nextPlayer';
import pickPlayersScreen from './ui-modules/pickPlayers';
import titleScreen from './ui-modules/titleScreen';

const root = document.querySelector('#app');

root.appendChild(titleScreen());

/**
 * Backlog:
 *  - Make the cv, for fuck's sake
 *  - Create screen controller called puppeteer, because it sounds cool
 *  - Create the board screen
 *  - Create a game over over screen
 *    - How and when should I announce game over?
 */
  
// function ScreenCallbackFactory(screen) {
//   return function () {
//     root.appendChild(screen());
//   };
// }

// const toPickPlayer = ScreenCallbackFactory(pickPlayersScreen);
// const toNextPlayer = ScreenCallbackFactory(nextPlayer)figma
;
