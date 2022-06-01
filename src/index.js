import style from './stylesheets/index.css';
import pickPlayersScreen from './ui-modules/pickPlayers';
import titleScreen from './ui-modules/titleScreen';

const root = document.querySelector('#app');

root.appendChild(pickPlayersScreen());