import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameplayStoreName, GameplayInterface } from './gameplay.interface';
import * as R from 'ramda';

export const gameplayFeature = createFeatureSelector<GameplayInterface>(gameplayStoreName);

export const selectPeopleDuelPlayerOnePick = createSelector(gameplayFeature, state => state.peopleDuel.playerOnePick);
export const selectPeopleDuelPlayerTwoPick = createSelector(gameplayFeature, state => state.peopleDuel.playerTwoPick);
export const canPlayerOneDrawACharacter = createSelector(selectPeopleDuelPlayerOnePick, pick => !R.isNil(pick));
export const canPlayerTwoDrawACharacter = createSelector(selectPeopleDuelPlayerTwoPick, pick => !R.isNil(pick));
export const canCharacterGameBeReset = createSelector(canPlayerOneDrawACharacter, canPlayerTwoDrawACharacter,
  (player1, player2) => !(player1 && player2));

export const selectStarshipsDuelPlayerOnePick = createSelector(gameplayFeature, state => state.starshipsDuel.playerOnePick);
export const selectStarshipsDuelPlayerTwoPick = createSelector(gameplayFeature, state => state.starshipsDuel.playerTwoPick);
export const canPlayerOneDrawAStarship = createSelector(selectStarshipsDuelPlayerOnePick, pick => !R.isNil(pick));
export const canPlayerTwoDrawAStarship = createSelector(selectStarshipsDuelPlayerTwoPick, pick => !R.isNil(pick));
export const canStarshipsGameBeReset = createSelector(canPlayerOneDrawAStarship, canPlayerTwoDrawAStarship,
  (player1, player2) => !(player1 && player2));

