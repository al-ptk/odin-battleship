export default function battleBoard() {
  const container = document.createElement('div');
  container.id = 'game-screen';
  container.classList.add('container');

  Object.assign(container.style, {
    overflow: "scroll",
    width: "200vw",
  })

  

  return container;
}
