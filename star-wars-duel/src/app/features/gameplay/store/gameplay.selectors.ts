import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameplayStoreName, GameplayInterface } from './gameplay.interface';

export const gameplayFeature = createFeatureSelector<GameplayInterface>(gameplayStoreName);

export const selectPeopleDuelPlayerOnePick = createSelector(gameplayFeature, state => state.peopleDuel.playerOnePick);

export const selectPeopleDuelPlayerTwoPick = createSelector(gameplayFeature, state => state.peopleDuel.playerTwoPick);

export const selectStarshipsDuelPlayerOnePick = createSelector(gameplayFeature, state => state.starshipsDuel.playerOnePick);

export const selectStarshipsDuelPlayerTwoPick = createSelector(gameplayFeature, state => state.starshipsDuel.playerTwoPick);
