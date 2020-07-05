import { PeopleDuel } from '../models/people-duel';
import { StarshipsDuel } from '../models/starships-duel';
import { DuelRecord } from '../models/duel-record';

export interface GameplayInterface {
  peopleDuel: PeopleDuel;
  starshipsDuel: StarshipsDuel;
  history: DuelRecord[];
}

export const initialState: GameplayInterface = {
  peopleDuel: {
    playerOnePick: null,
    playerTwoPick: null,
  },
  starshipsDuel: {
    playerOnePick: null,
    playerTwoPick: null,
  },
  history: [],
}

export const gameplayStoreName = 'gameplay';
