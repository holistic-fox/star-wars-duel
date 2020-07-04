import { Action, createReducer, on } from '@ngrx/store';
import { initialState, GameplayInterface } from './gameplay.interface';
import { GameMode } from '../models/game-mode';
import { Duel } from '../models/duel';
import * as A from './gameplay.actions';
import * as R from 'ramda';

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
  on(A.playerDraw, (state, {player, mode}) => {
    return state;
  }),
)

export function gameplayReducer(state: GameplayInterface | undefined, action: Action): GameplayInterface {
  return reducer(state, action);
}
