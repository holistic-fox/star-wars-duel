import { Action, createReducer, on } from '@ngrx/store';
import { GameplayInterface, initialState } from './gameplay.interface';
import { GameMode } from '../models/game-mode';
import { Duel } from '../models/duel';
import * as A from './gameplay.actions';
import * as R from 'ramda';
import { Player } from '../models/player';

const reducer = createReducer(initialState,
  on(A.reset, (state, {mode}) => {
    const resetValue: Duel = {
      playerOnePick: null,
      playerTwoPick: null,
      winner: null,
    };
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
)

export function gameplayReducer(state: GameplayInterface | undefined, action: Action): GameplayInterface {
  return reducer(state, action);
}