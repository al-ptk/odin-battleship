import flame from '../images/flame.svg';
import shipTip from '../images/shipTip.svg';
import shipBody from '../images/shipBody.svg';

export function flameIcon() {
  const img = document.createElement('img');
  img.src = flame;
  img.style.width = '24px';
  img.style.height = '24px';
  return img;
}

export function shipIcon(tip, end, orientation) {
  const img = document.createElement('img');
  img.src = tip ? shipTip : shipBody;
  if (!orientation) {
    img.style.transform = `rotate(90deg)`;
  }
  if (!end && !orientation) {
    img.style.transform = `rotate(270deg)`;
  }
  if (end && orientation) {
    img.style.transform = `rotate(-180deg)`;
  }
  img.style.width = '105%';
  img.style.height = '105%';
  return img;
}
export function renderShots(player) {
  for (const shot of player.getMarkedCells()) {
    const cell = document.querySelector(`.board #c${shot}`);
    const img = flameIcon();
    img.style.position = 'absolute';
    img.style.zIndex = '10';
    cell.appendChild(img);
  }
}
export function renderShips(player) {
  for (const ship of player.peekAtShips()) {
    const orientation = ship.getOrientation();
    const boundaries = ship.getBoundaries();
    for (let i = 0; i < boundaries.length; i++) {
      const cell = document.querySelector(`#c${boundaries[i]}`);
      cell.style.position = 'relative';
      const startTip = i === 0;
      const endTip = i === boundaries.length - 1;
      const img = shipIcon(startTip | endTip, endTip, orientation);
      img.style.position = 'absolute';
      img.style.zIndex = '5';
      cell.appendChild(img);
    }
  }
}
