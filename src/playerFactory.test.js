import playerFactory from './playerFactory.js';

describe('Testing the player object', () => {
  const game = {boardLen: 10, shipNumbers: 5}
  const player1 = playerFactory();
  const player2 = playerFactory();

  test('Players can attack each other', () => {});

  test('allShipsSunk signal ends gameloop', () => {});
});
