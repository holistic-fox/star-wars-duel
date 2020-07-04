import { Action, createReducer, on } from '@ngrx/store';
import { initialState, StarWarsDataInterface } from './star-wars-data.interface';
import { reset } from './star-wars-data.actions';

const reducer = createReducer(initialState,
  on(reset, () => initialState),
)

export function starWarsDataReducer(state: StarWarsDataInterface | undefined, action: Action): StarWarsDataInterface {
  return reducer(state, action);
}
