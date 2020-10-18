import { initialState, starWarsStoreName } from '../store/star-wars-data.interface';
import { people } from '../mock-data/people';
import { starships } from '../mock-data/starships';
import * as S from '../store/star-wars-data.selectors';
import * as R from 'ramda';

const initState = {[starWarsStoreName]: initialState};
let mockState;

describe('star-wars-data.selectors.ts', () => {
  beforeEach(() => {
    mockState = R.set(R.lensProp(starWarsStoreName), {
      loading: {people: true, starships: true},
      starships,
      people
    }, mockState);
  });

  describe('starWarsDataFeature', () => {
    it('should return feature initial state', () => {
      const result = S.starWarsDataFeature(initState);
      const expected = initialState;

      expect(result).toEqual(expected);
    });
    it('should return feature mocked state', () => {
      const result = S.starWarsDataFeature(mockState);
      const expected = mockState[starWarsStoreName];

      expect(result).toEqual(expected);
    });
  });

  describe('selectPeopleList', () => {
    it('should return empty array on initial state', () => {
      const result = S.selectPeopleList(initState);
      const expected = [];

      expect(result).toEqual(expected);
    });
    it('should return array of people on mocked state', () => {
      const result = S.selectPeopleList(mockState);
      const expected = mockState[starWarsStoreName].people;

      expect(result).toEqual(expected);
    });
  });

  describe('arePeopleLoading', () => {
    it('should return false on initial state', () => {
      const result = S.arePeopleLoading(initState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return true when people data are loading', () => {
      const result = S.arePeopleLoading(mockState);
      const expected = true;

      expect(result).toEqual(expected);
    });
  });

  describe('isGameWithPeopleReady', () => {
    it('should return false on initial state', () => {
      const result = S.isGameWithPeopleReady(initState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return false when people array is loading', () => {
      const result = S.isGameWithPeopleReady(mockState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return false when people array is empty', () => {
      mockState[starWarsStoreName].people = [];
      const result = S.isGameWithPeopleReady(mockState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return true when people array not loading and is not empty', () => {
      mockState[starWarsStoreName].loading.people = false;
      const result = S.isGameWithPeopleReady(mockState);
      const expected = true;

      expect(result).toEqual(expected);
    });
  });

  describe('selectStarshipsList', () => {
    it('should return empty array on initial state', () => {
      const result = S.selectStarshipsList(initState);
      const expected = [];

      expect(result).toEqual(expected);
    });
    it('should return array of starships on mocked state', () => {
      const result = S.selectStarshipsList(mockState);
      const expected = mockState[starWarsStoreName].starships;

      expect(result).toEqual(expected);
    });
  });

  describe('areStarshipsLoading', () => {
    it('should return false on initial state', () => {
      const result = S.areStarshipsLoading(initState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return true when starships data are loading', () => {
      const result = S.areStarshipsLoading(mockState);
      const expected = true;

      expect(result).toEqual(expected);
    });
  });

  describe('isGameWithStarshipsReady', () => {
    it('should return false on initial state', () => {
      const result = S.isGameWithStarshipsReady(initState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return false when starships array is loading', () => {
      const result = S.isGameWithStarshipsReady(mockState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return false when starships array is empty', () => {
      mockState[starWarsStoreName].starships = [];
      const result = S.isGameWithStarshipsReady(mockState);
      const expected = false;

      expect(result).toEqual(expected);
    });
    it('should return true when starships array not loading and is not empty', () => {
      mockState[starWarsStoreName].loading.starships = false;
      const result = S.isGameWithStarshipsReady(mockState);
      const expected = true;

      expect(result).toEqual(expected);
    });
  });
});
