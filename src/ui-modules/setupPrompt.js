import fancyButton from './fancyButton';

export default function setupPrompt() {
  const container = document.createElement('div');
  container.id = 'setup-prompt';
  container.classList.add('container');
  container.style.paddingTop = '40vh';

  const btn = fancyButton();
  btn.textContent = 'player 1 setup board.';
  btn.style.height = 'fit-content';
  btn.style.padding = '20px';
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  container.appendChild(btn);

  return container;
}
