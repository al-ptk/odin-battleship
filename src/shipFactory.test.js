import shipFactory from './shipFactory';

describe('Testing the ship object interface', () => {
  const horShip = shipFactory(6, false, 3, 10);
  const verShip = shipFactory(6, true, 3, 10);
  
  test('Ship initializes with horizontal direction correctly', () => {
    expect(horShip.getBoundaries()).toStrictEqual(['6', '7', '8']);
  });

  test('Ship initializes with vertical direction correctly', () => {
    expect(verShip.getBoundaries()).toStrictEqual(['6', '16', '26']);
  });
});
