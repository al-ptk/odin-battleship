import { range } from './zonks.js';

/** Ship factory:
 * _unitState = Array (_length).fill ([index, state]) or smthg
 * getLength () => _length << query
 * hit () << update \\ switch state
 * isSunk () => true\false << query
 */

export default function shipFactory(origin, orientation, length) {
  /**
   * origin: starting point of ship
   * orientation: false for horizontal, true for vertical
   * Length: how far the ship spans from the origin
   */

  const _segments = Object.fromEntries(
    range(origin, length).map((elem) => [elem, 'a'])
  );

  function getBoundaries() {
    return Object.keys(_segments);
  }

  // function hit(index) {}

  return {
    getBoundaries,
  };
}
