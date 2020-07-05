import { PeopleDuel } from '../models/people-duel';
import { StarshipsDuel } from '../models/starships-duel';

export interface GameplayInterface {
  peopleDuel: PeopleDuel;
  starshipsDuel: StarshipsDuel;
  history: [];
}

export const initialState: GameplayInterface = {
  peopleDuel: {
    playerOnePick: null,
    playerTwoPick: null,
    winner: null,
  },
  starshipsDuel: {
    playerOnePick: null,
    playerTwoPick: null,
    winner: null,
  },
  history: [],
}

export const gameplayStoreName = 'gameplay';
