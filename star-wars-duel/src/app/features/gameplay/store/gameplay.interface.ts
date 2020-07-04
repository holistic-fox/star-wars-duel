import { Duel } from '../models/duel';

export interface GameplayInterface {
  peopleDuel: Duel;
  starshipsDuel: Duel;
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
