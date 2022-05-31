import shipFactory from './shipFactory';

describe('Testing the ship object interface', () => {
  test('Ship initializes with horizontal direction correctly', () => {
    const horShip = shipFactory(6, false, 3, 10);
    expect(horShip.getBoundaries()).toStrictEqual(['6', '7', '8']);
  });

  test('Ship initializes with vertical direction correctly', () => {
    const verShip = shipFactory(6, true, 3, 10);
    expect(verShip.getBoundaries()).toStrictEqual(['6', '16', '26']);
  });
});
