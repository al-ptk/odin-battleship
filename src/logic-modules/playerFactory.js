import gameBoardFactory from './gameBoardFactory.js';

export default function playerFactory(boardLen) {
  // set up the ships on the board
  // shoot each other until one has all ships sunk
  // if all ships sunk, send game over signal
  const _board = gameBoardFactory(boardLen);

  function deployShip(index, orientation, size) {
    try {
      _board.placeShip(index, orientation, size);
    } catch (err) {
      throw err;
    }
  }

  function receiveAttack(index) {
    const truthy = _board.receiveAttack(index);
    return truthy ? 'hit' : 'miss';
  }

  function allShipsSunk() {
    return _board.allShipsSunk();
  }

  function placeRandomShip(size) {
    return _board.placeRandomShip(size);
  }

  return {
    deployShip,
    receiveAttack,
    allShipsSunk,
    placeRandomShip
  };
}
