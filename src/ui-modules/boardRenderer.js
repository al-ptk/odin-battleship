

export default function boardRenderer() {
  const container = document.createElement('div');
  container.classList.add('board');

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    container.appendChild(cell);
    cell.style.backgroundColor = 'white';
    cell.id = `c${i}`;
    cell.addEventListener('click', (e) => {
      console.log(cell.id);
    });
  }
  return container;
}
