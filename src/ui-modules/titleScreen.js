import fancyButton from "./fancyButton";

const root = document.querySelector('#app');

export default function titleScreen() {
  const container = document.createElement('div');
  container.id = 'title-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '40vh',
  });

  const btn = fancyButton();
  btn.textContent = 'Fancy Battleship.';
  btn.style.fontWeight = 600;
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  container.appendChild(btn);

  return container;
}
