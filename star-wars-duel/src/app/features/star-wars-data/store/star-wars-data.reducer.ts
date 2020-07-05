import { Action, createReducer, on } from '@ngrx/store';
import { initialState, StarWarsDataInterface } from './star-wars-data.interface';
import * as A from './star-wars-data.actions';
import * as R from 'ramda';

const reducer = createReducer(initialState,
  on(A.reset, () => initialState),
  on(A.loadAllPeople, state => R.set(R.lensPath(['loading', 'people']), true, state)),
  on(A.loadAllPeopleError, state => R.set(R.lensPath(['loading', 'people']), false, state)),
  on(A.loadAllPeopleSuccess, (state, { people}) => {
    state = R.set(R.lensProp('people'), people, state);
    return R.set(R.lensPath(['loading', 'people']), false, state);
  }),
  on(A.loadAllStarships, (state) => R.set(R.lensPath(['loading', 'starships']), true, state)),
  on(A.loadAllStarshipError, state => R.set(R.lensPath(['loading', 'starships']), false, state)),
  on(A.loadAllStarshipsSuccess, (state, { starships}) => {
    state = R.set(R.lensProp('starships'), starships, state);
    return R.set(R.lensPath(['loading', 'starships']), false, state);
  }),
)

export function starWarsDataReducer(state: StarWarsDataInterface | undefined, action: Action): StarWarsDataInterface {
  return reducer(state, action);
}
