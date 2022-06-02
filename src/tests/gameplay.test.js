import playerFactory from '../logic-modules/playerFactory';

describe('Test gameplay features', () => {
  const p1 = playerFactory(10);
  test('Put ships randomly successfully', () => {
    expect(p1.placeRandomShip(2)).toMatch(/empty spot at/);
  })
})