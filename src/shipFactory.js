import { range } from './zonks.js';

/** Ship factory:
 * _unitState = Array (_length).fill ([index, state]) or smthg
 * hit () << update \\ switch state
 * isSunk () => true\false << query
 */

export default function shipFactory(
  origin,
  orientation,
  shipLength,
  boardEdge
) {
  /**
   * origin: starting point of ship
   * orientation: false for horizontal, true for vertical
   * length: how far the ship spans from the origin
   */

  const _segments = Object.fromEntries(
    range(origin, shipLength, boardEdge * orientation).map((elem) => [
      elem,
      'a',
    ])
  );

  function getBoundaries() {
    return Object.keys(_segments);
  }

  function hit (index) {
    const gotten = Object.keys(_segments).includes(index.toString());
    return gotten ? _segments[index.toString()] = 'hit' : false;
  }

  return {
    getBoundaries,
    hit,
  };
}
