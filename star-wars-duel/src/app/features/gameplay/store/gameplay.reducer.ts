import { Action, createReducer, on } from '@ngrx/store';
import { initialState, GameplayInterface } from './gameplay.interface';
import * as A from './gameplay.actions';
import * as R from 'ramda';

const reducer = createReducer(initialState,
  on(A.reset, () => initialState),
)

export function gameplayReducer(state: GameplayInterface | undefined, action: Action): GameplayInterface {
  return reducer(state, action);
}
