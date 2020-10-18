import { initialState, StarWarsDataInterface } from '../store/star-wars-data.interface';
import { starWarsDataReducer } from '../store/star-wars-data.reducer';
import { people } from '../mock-data/people';
import { starships } from '../mock-data/starships';
import * as A from '../store/star-wars-data.actions';
import * as R from 'ramda';

let state: StarWarsDataInterface = initialState;
let expected: StarWarsDataInterface = initialState;

describe('star-wars-data.reducer.ts', () => {
  beforeEach(() => {
    state = R.clone(initialState);
    expected = R.clone(initialState);
  });

  describe('reset', () => {
    it('should set state to inital state', () => {
      const action = A.reset();
      const result = starWarsDataReducer(state, action);

      expect(result).toEqual(expected);
    });
  });

  describe('loadAllPeople', () => {
    it('should set people to loading true', () => {
      const action = A.loadAllPeople();
      const result = starWarsDataReducer(state, action);
      expected.loading.people = true;

      expect(result).toEqual(expected);
    });
  });

  describe('loadAllPeopleError', () => {
    it('should set people to loading false', () => {
      state.loading.people = true;
      const action = A.loadAllPeopleError();
      const result = starWarsDataReducer(state, action);
      expected.loading.people = false;

      expect(result).toEqual(expected);
    });
  });

  describe('loadAllPeopleSuccess', () => {
    it('should set people to loading false', () => {
      state.loading.people = true;
      const action = A.loadAllPeopleSuccess({ people });
      const result = starWarsDataReducer(state, action);
      expected.loading.people = false;
      expected.people = people;

      expect(result).toEqual(expected);
    });
  });
  describe('loadAllStarships', () => {
    it('should set people to loading true', () => {
      const action = A.loadAllStarships();
      const result = starWarsDataReducer(state, action);
      expected.loading.starships = true;

      expect(result).toEqual(expected);
    });
  });

  describe('loadAllStarshipError', () => {
    it('should set people to loading false', () => {
      state.loading.starships = true;
      const action = A.loadAllStarshipError();
      const result = starWarsDataReducer(state, action);
      expected.loading.starships = false;

      expect(result).toEqual(expected);
    });
  });

  describe('loadAllStarshipsSuccess', () => {
    it('should set people to loading false', () => {
      state.loading.starships = true;
      const action = A.loadAllStarshipsSuccess({ starships });
      const result = starWarsDataReducer(state, action);
      expected.loading.starships = false;
      expected.starships = starships;

      expect(result).toEqual(expected);
    });
  });
});
