import gameBoardFactory from './gameBoardFactory.js';

describe('Testing the gameBoard object', () => {
  const board = gameBoardFactory(10);
  test('Board starts with empty markedCells array', () => {
    expect(board.getMarkedCells()).toStrictEqual([]);
  });

  test('Board registers indexes of marked cells', () => {
    board.receiveAttack('5');
    expect(board.getMarkedCells()).toContain('5');
  });
});
