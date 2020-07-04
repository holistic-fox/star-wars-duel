import { Action, createReducer, on } from '@ngrx/store';
import { initialState, HomePageInterface } from './home-page.interface';
import { reset } from './home-page.actions';

const reducer = createReducer(initialState,
  on(reset, () => initialState),
)

export function homePageReducer(state: HomePageInterface | undefined, action: Action): HomePageInterface {
  return reducer(state, action);
}
