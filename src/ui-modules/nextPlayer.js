import fancyButton from "./fancyButton";

const root = document.querySelector('#app');

export default function nextPlayer(callback) {
  const container = document.createElement('div');
  container.id = "next-player";
  container.classList.add('container');

  Object.assign(container.style, {
    paddingTop: '40vh',
  });

  const btn = fancyButton();
  btn.textContent = 'next player..';
  btn.style.height = '100px'
  btn.style.fontWeight = 600;
  btn.addEventListener('click', e => {
    e.target.parentNode.remove();
    callback();
  })
  container.appendChild(btn)
  
  return container;
}
