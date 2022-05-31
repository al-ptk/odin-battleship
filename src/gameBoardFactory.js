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

  function receiveAttack (index) {
    _markedCells.push(index.toString());
  }

  return {
    getMarkedCells,
    receiveAttack
  };
}
