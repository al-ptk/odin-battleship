import gameBoardFactory from './gameBoardFactory.js';

describe('Testing the gameBoard object', () => {
  const boardLen = 10;
  const board = gameBoardFactory(boardLen);

  test('Board starts with empty markedCells array', () => {
    expect(board.getMarkedCells()).toStrictEqual([]);
  });

  test('Board registers indexes of marked cells', () => {
    board.receiveAttack('5');
    expect(board.getMarkedCells()).toContain('5');
  });

  test('Board fails to place ships from vertical edge to out of bounds', () => {
    const origin = 21;
    const shipLen = 3;
    const orientation = false;
    expect(board.placeShip(origin, orientation, shipLen)).not.toBeUndefined();
    expect(board.placeShip(origin, orientation, shipLen)).toBeFalsy();
  })

  // test('Board suceeds to place ship within bounds', () => {})

  // test('Board fails to place ship on top of ship', () => {})
});
