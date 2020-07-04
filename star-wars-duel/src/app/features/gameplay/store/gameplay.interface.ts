export interface GameplayInterface {
  peopleDuel: {
    playerOnePick: number;
    playerTwoPick: number;
  };
  starshipsDuel: {
    playerOnePick: number;
    playerTwoPick: number;
  };
  history: [];
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
