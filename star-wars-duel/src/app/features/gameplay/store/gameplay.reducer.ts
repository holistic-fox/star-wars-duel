import { Action, createReducer, on } from '@ngrx/store';
import { GameplayInterface, initialState } from './gameplay.interface';
import { GameMode } from '../models/game-mode';
import { PeopleDuel } from '../models/people-duel';
import { StarshipsDuel } from '../models/starships-duel';
import { Player } from '../models/player';
import * as A from './gameplay.actions';
import * as R from 'ramda';

const resetValue: PeopleDuel | StarshipsDuel = {
  playerOnePick: null,
  playerTwoPick: null,
};

const reducer = createReducer(initialState,
  on(A.resetMode, (state, {mode}) => {
    let lensProp;
    switch (mode) {
      case GameMode.People:
        lensProp = R.lensProp('peopleDuel');
        break;
      case GameMode.Starships:
        lensProp = R.lensProp('starshipsDuel');
        break;
    }
    return R.set(lensProp, resetValue, state);
  }),
  on(A.resetGameplay, state => {
    state = R.set(R.lensProp('peopleDuel'), resetValue, state);
    return R.set(R.lensProp('starshipsDuel'), resetValue, state);
  }),
  on(A.playerDrawSuccess, (state, {player, mode, entity}) => {
    let gameLens;
    switch (mode) {
      case GameMode.People:
        gameLens = 'peopleDuel';
        break;
      case GameMode.Starships:
        gameLens = 'starshipsDuel';
        break;
    }
    let playerLens;
    switch (player) {
      case Player.One:
        playerLens = 'playerOnePick';
        break;
      case Player.Two:
        playerLens = 'playerTwoPick';
        break;
    }

    return R.set(R.lensPath([gameLens, playerLens]), entity, state);
  }),
  on(A.addHistoryRecord, (state, {record}) =>
    R.set(R.lensPath(['history', state.history.length]), record, state)),
)

export function gameplayReducer(state: GameplayInterface | undefined, action: Action): GameplayInterface {
  return reducer(state, action);
}
