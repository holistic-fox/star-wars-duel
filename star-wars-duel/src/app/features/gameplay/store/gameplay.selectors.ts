import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameplayStoreName, GameplayInterface } from './gameplay.interface';
import { GameResults } from '../models/game-results';
import * as R from 'ramda';

export const gameplayFeature = createFeatureSelector<GameplayInterface>(gameplayStoreName);

export const selectPeopleDuelPlayerOnePick = createSelector(gameplayFeature, state => state.peopleDuel.playerOnePick);
export const selectPeopleDuelPlayerTwoPick = createSelector(gameplayFeature, state => state.peopleDuel.playerTwoPick);
export const canPlayerOneDrawACharacter = createSelector(selectPeopleDuelPlayerOnePick, pick => !R.isNil(pick));
export const canPlayerTwoDrawACharacter = createSelector(selectPeopleDuelPlayerTwoPick, pick => !R.isNil(pick));
export const canCharacterGameBeReset = createSelector(canPlayerOneDrawACharacter, canPlayerTwoDrawACharacter,
  (player1, player2) => !(player1 && player2));
export const selectCharacterDuelResults = createSelector(selectPeopleDuelPlayerOnePick, selectPeopleDuelPlayerTwoPick,
  (player1, player2) => {
    if (R.isNil(player1) || R.isNil(player2)) {
      return undefined;
    }
    if (player1.mass > player2.mass) {
      return GameResults.Player1;
    }
    if (player2.mass > player1.mass) {
      return GameResults.Player2;
    }
    if (player1.mass === player2.mass) {
      return GameResults.Tie;
    }
    return GameResults.Tie;
  });

export const selectDataForPeopleDuelHistoryRecord = createSelector(
  selectPeopleDuelPlayerOnePick, selectPeopleDuelPlayerTwoPick, selectCharacterDuelResults,
  (player1, player2, result) => {
    if (R.any(R.isNil)([player1, player2, result])) {
      return undefined;
    }
    return ({player1, player2, result});
  });

export const selectStarshipsDuelPlayerOnePick = createSelector(gameplayFeature, state => state.starshipsDuel.playerOnePick);
export const selectStarshipsDuelPlayerTwoPick = createSelector(gameplayFeature, state => state.starshipsDuel.playerTwoPick);
export const canPlayerOneDrawAStarship = createSelector(selectStarshipsDuelPlayerOnePick, pick => !R.isNil(pick));
export const canPlayerTwoDrawAStarship = createSelector(selectStarshipsDuelPlayerTwoPick, pick => !R.isNil(pick));
export const canStarshipsGameBeReset = createSelector(canPlayerOneDrawAStarship, canPlayerTwoDrawAStarship,
  (player1, player2) => !(player1 && player2));
export const selectStarshipsDuelResults = createSelector(selectStarshipsDuelPlayerOnePick, selectStarshipsDuelPlayerTwoPick,
  (player1, player2) => {
    if (R.isNil(player1) || R.isNil(player2)) {
      return undefined;
    }
    const player1Crew = parseFloat(player1.crew);
    const player2Crew = parseFloat(player2.crew);
    if (player1Crew > player2Crew) {
      return GameResults.Player1;
    }
    if (player2Crew > player1Crew) {
      return GameResults.Player2;
    }
    if (player1Crew === player2Crew) {
      return GameResults.Tie;
    }
    return GameResults.Tie;
  });

export const selectDataForStarshipsDuelHistoryRecord = createSelector(
  selectStarshipsDuelPlayerOnePick, selectStarshipsDuelPlayerTwoPick, selectStarshipsDuelResults,
  (player1, player2, result) => {
    if (R.any(R.isNil)([player1, player2, result])) {
      return undefined;
    }
    return ({player1, player2, result});
  });
