import { range } from './zonks.js';

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

  function hit(index) {
    const gotten = Object.keys(_segments).includes(index.toString());
    return gotten ? (_segments[index.toString()] = 'hit') : false;
  }

  function isSunk() {
    return Object.values(_segments).reduce(
      (current, next) => next === 'hit' && current,
      true
    );
  }

  return {
    getBoundaries,
    hit,
    isSunk,
  };
}
