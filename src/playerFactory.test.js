import playerFactory from './playerFactory.js';

describe('Testing the player object', () => {
  const boardLen = 10;
  const player1 = playerFactory(boardLen);

  test('Player successfully deploys horizontal ship', () => {
    expect(() => {
      player1.deployShip(0, false, 5);
    }).not.toThrowError();
  });


});
