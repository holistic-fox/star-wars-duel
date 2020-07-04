import { createAction, props } from '@ngrx/store';
import { Person } from '../models/person';
import { Starship } from '../models/starship';

const PREFIX = '[STAR WARS DATA]';

export const loadAllPeople = createAction(`${PREFIX} Load all people`);
export const loadAllPeopleSuccess = createAction(
  `${PREFIX} Load all people success`,
  props<{ people: Person[] }>());
export const loadAllPeopleError = createAction(`${PREFIX} Load all people error`);

export const loadAllStarships = createAction(`${PREFIX} Load all starships`);
export const loadAllStarshipsSuccess = createAction(
  `${PREFIX} Load all starships success`,
  props<{ starships: Starship[] }>());
export const loadAllStarshipError = createAction(`${PREFIX} Load all starships error`);

export const reset = createAction(`${PREFIX} Reset`);
