const root = document.querySelector('#app');

export default function pickPlayersScreen() {
  const container = document.createElement('div');
  container.id = 'pick-players';

  Object.assign(container.style, {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: '30vh',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '50px',
  });

  const btnAI = document.createElement('button');
  btnAI.classList.add('fancy', 'fancyLetters');
  btnAI.textContent = 'against computer.';
  btnAI.style.fontWeight = 600;
  btnAI.style.height = "2.5em";
  btnAI.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  container.appendChild(btnAI);

  const btnHuman = document.createElement('button');
  btnHuman.classList.add('fancy', 'fancyLetters');
  btnHuman.textContent = 'against human.';
  btnHuman.style.fontWeight = 600;
  btnHuman.style.height = '2.5em';
  btnHuman.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  container.appendChild(btnHuman);

  return container;
}
