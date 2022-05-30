import shipFactory from './shipFactory';

const ship = shipFactory(6, false, 3);

describe('Testing the ship object interface', () => {
  test('Does ship return the length it was constructed as?', () => {
    expect(ship.getBoundaries()).toStrictEqual(
      Object.keys({ 6: 'a', 7: 'a', 8: 'a' })
    );
  });

  // test('Is the ship, of length 3, hit in the middle?', () => {
  //   expect(ship.hit(1)).toBeTruthy();
  // });
});
