import { createFeatureSelector, createSelector } from '@ngrx/store';
import { starWarsStoreName, StarWarsDataInterface } from './star-wars-data.interface';

export const starWarsDataFeature = createFeatureSelector<StarWarsDataInterface>(starWarsStoreName);

export const selectPeopleList = createSelector(starWarsDataFeature, state => state.people);

export const selectStarshipsList = createSelector(starWarsDataFeature, state => state.starships);
