export default function boardRenderer() {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.addEventListener('click', (e) => {
      console.log(i);
    });
    container.appendChild(cell);
  }

  return container;
}
