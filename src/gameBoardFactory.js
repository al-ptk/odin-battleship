import { range } from './zonks.js';

export default function gameBoardFactory(widthLen) {
  // Gameboard factory
  // _edgeLength = int
  //
  // _board = Array (_edgeLength ** 2). fill (cell)
  // // cell is 3+1 states: unknown, hit, miss
  // // Plus  placed-ship for the player's own board.
  //
  // placeShip (index) {       // vvv Single obj? Two ints? Array pair? vvv
  //   is ship fall out of boundaries?
  // } << update
  //
  // receiveAttack (index) => hit\miss << query
  // allShipsDown () => true\false << query
  // const _containedShips = Array(5).fill(shipFactory())
  const _markedCells = [];

  function getMarkedCells() {
    return _markedCells;
  }

  function receiveAttack(index) {
    _markedCells.push(index.toString());
  }

  function _horizontValid(range) {
    return range.reduce(
      (curr, next) => Math.trunc(parseInt(curr) / 10) === Math.trunc(next) / 10
    );
  }

  function _verticalValid(range) {
    return range.reduce(
      (curr, next) => parseInt(curr) % widthLen === parseInt(next) % widthLen
    );
  }

  function placeShip(origin, orientation, shipLen) {
    const shipSpan = range(origin, shipLen, orientation * widthLen);
    const valid = orientation
      ? _horizontValid(shipSpan)
      : _horizontValid(shipSpan);
    if (!valid) return false;
    // Vertical: all modulos must remain the same
    // Horizontal: all positions with divisions by width return equal index division by width
  }

  return {
    getMarkedCells,
    receiveAttack,
    placeShip,
  };
}
