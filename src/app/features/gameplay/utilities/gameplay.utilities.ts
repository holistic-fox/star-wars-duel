import { Person } from '../../star-wars-data/models/person';
import { GameResults } from '../models/game-results';
import * as R from 'ramda';

export const getRandomArrayElement = <E>(array: Array<E>): E => array[Math.floor(Math.random() * array.length)];
export const getNumberOrZero = (num: string): number => {
  const ret = parseFloat(num.replace(',', num));
  return isNaN(ret) ? 0 : ret;
};

export const isSkywalker = (player: Person): boolean =>
  R.prop('name', player) === 'Luke Skywalker';

export const isVader = (player: Person): boolean =>
  R.prop('name', player) === 'Darth Vader';

export const isJoda = (player: Person): boolean =>
  R.prop('name', player) === 'Yoda';

export const getPlayerScore = (player: Person): number => {

  if (isJoda(player)) { return 10000; }
  if (isSkywalker(player)) { return 9999; }
  if (isVader(player)) { return 9998; }

  const height = getNumberOrZero(R.prop('height', player));
  const mass = getNumberOrZero(R.prop('mass', player));
  return mass + height;
};

export const getPeopleDuelResult = (player1: Person, player2: Person): GameResults => {
  if (R.isNil(player1) || R.isNil(player2)) { return undefined; }

  const playerOne = getPlayerScore(player1);
  const playerTwo = getPlayerScore(player2);
  if (playerOne > playerTwo) { return GameResults.Player1; }
  if (playerTwo > playerOne) { return GameResults.Player2; }
  if (playerOne === playerTwo) { return GameResults.Tie; }
  return GameResults.Tie;
};
