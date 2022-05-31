import { range } from './zonks.js';
import shipFactory from './shipFactory.js';

export default function gameBoardFactory(widthLen) {
  const _markedCells = [];
  const _allShips = [];
  const _shipIndexes = {};

  function getMarkedCells() {
    return _markedCells;
  }

  function receiveAttack(index) {
    _markedCells.push(index.toString());
    const shipExists = Object.keys(_shipIndexes).includes(index);
    return shipExists ? _shipIndexes[index].hit(index) : false;
  }

  function _horizontalValid(range) {
    const ln = Math.trunc(range[0] / widthLen);
    return range.reduce(
      (curr, next) => Math.trunc(next / widthLen) === ln && curr,
      true
    );
  }

  function _verticalValid(range) {
    return range.reduce((curr, next) => Math.trunc(next / widthLen) < widthLen && curr, true);
  }

  function _spotTaken(range) {
    return range.reduce(
      (curr, next) =>
        Object.keys(_shipIndexes).includes(next.toString()) || curr,
      false
    );
  }

  function _appendShip(origin, orientation, shipLen) {
    const ship = shipFactory(origin, orientation, shipLen, widthLen);
    Object.assign(
      _shipIndexes,
      Object.fromEntries(ship.getBoundaries().map((idx) => [idx, ship]))
    );
    _allShips.push(ship);
    return true;
  }

  function placeShip(origin, orientation, shipLen) {
    if (
      origin === undefined ||
      orientation === undefined ||
      shipLen === undefined
    )
      throw new Error('Invalid Input');
    const shipSpan = range(origin, shipLen, orientation * widthLen);
    const valid = orientation
      ? _verticalValid(shipSpan)
      : _horizontalValid(shipSpan);
    if (!valid) throw new Error('Invalid Position');
    if (_spotTaken(shipSpan)) throw new Error('Spot Taken');
    return _appendShip(origin, orientation, shipLen);
  }

  function allShipsSunk() {
    return _allShips.reduce((curr, next) => next.isSunk() && curr, true);
  }

  return {
    getMarkedCells,
    receiveAttack,
    placeShip,
    allShipsSunk,
  };
}
