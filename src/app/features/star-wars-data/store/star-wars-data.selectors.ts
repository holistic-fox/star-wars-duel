import { createFeatureSelector, createSelector } from '@ngrx/store';
import { starWarsStoreName, StarWarsDataInterface } from './star-wars-data.interface';
import * as R from 'ramda';

export const starWarsDataFeature = createFeatureSelector<StarWarsDataInterface>(starWarsStoreName);

export const selectPeopleList = createSelector(starWarsDataFeature, state => state.people);
export const arePeopleLoading = createSelector(starWarsDataFeature, state => state.loading.people);
export const isGameWithPeopleReady = createSelector(arePeopleLoading, selectPeopleList,
  (loading, list) => !loading && !R.isEmpty(list));

export const selectStarshipsList = createSelector(starWarsDataFeature, state => state.starships);
export const areStarshipsLoading = createSelector(starWarsDataFeature, state => state.loading.starships);
export const isGameWithStarshipsReady = createSelector(areStarshipsLoading, selectStarshipsList,
  (loading, list) => !loading && !R.isEmpty(list));
