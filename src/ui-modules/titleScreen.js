const root = document.querySelector('#app');

export default function titleScreen() {
  const container = document.createElement('div');
  container.id = "title-screen";

  Object.assign(container.style, {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const btn = document.createElement('button');
  btn.classList.add('fancy', 'fancyLetters');
  btn.textContent = 'Fancy Battleship.';
  btn.style.fontWeight = 600;
  btn.addEventListener('click', e => {
    e.target.parentNode.remove();
  })
  container.appendChild(btn)
  
  return container;
}
