import fancyButton from './fancyButton';

const root = document.querySelector('#app');

export default function nextPlayer(game) {
  const container = document.createElement('div');
  container.id = 'next-player';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '40vh',
  });

  const btn = fancyButton();
  btn.textContent = `player ${game.getCurrentPlayer() + 1} is next..`;
  btn.style.height = '100px';
  btn.style.fontWeight = 600;
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    game.puppeteer('game-view');
  });
  container.appendChild(btn);

  return container;
}
