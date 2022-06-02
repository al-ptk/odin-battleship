import fancyButton from "./fancyButton";

export default function gameOverModal(puppeteer) {
  const stopper = document.createElement('div');
  stopper.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  stopper.classList.add('stopper');

  const btn = fancyButton();
  btn.textContent = 'game over.'
  btn.addEventListener('click', e => {
    stopper.parentNode.remove();
    setTimeout (() =>  puppeteer('title-screen'), 225);
  })
  stopper.appendChild(btn);

  return stopper;
}
