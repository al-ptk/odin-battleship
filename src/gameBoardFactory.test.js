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

  test('Board fails to place ships from horizontal edge to out of bounds', () => {
    const origin = 21;
    const shipLen = 3;
    const orientation = false;
    expect(board.placeShip(origin, orientation, shipLen)).not.toBeUndefined();
    expect(board.placeShip(origin, orientation, shipLen)).toBeFalsy();
  });

  test('Board fails to place ships from vertical edge to out of bounds', () => {
    const origin = 81;
    const shipLen = 3;
    const orientation = true;
    expect(board.placeShip(origin, orientation, shipLen)).not.toBeUndefined();
    expect(board.placeShip(origin, orientation, shipLen)).toBeFalsy();
  });

  test('Board suceeds to place ship within bounds', () => {
    const origin = 7;
    const shipLen = 3;
    const orientation = true;
    expect(board.placeShip(origin, orientation, shipLen)).toBeTruthy();    
  })

  test('Board fails to place ship on top of ship', () => {
    const origin = 4;
    const shipLen = 3;
    const orientation = true;
    board.placeShip(origin, orientation, shipLen);
    expect(board.placeShip(origin, orientation, shipLen)).toBeFalsy();
    expect(board.placeShip(13, false, shipLen)).toBeFalsy();
  })
});
