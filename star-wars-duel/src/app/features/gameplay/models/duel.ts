import { Player } from './player';

export interface Duel {
  playerOnePick: number;
  playerTwoPick: number;
  winner: Player;
}
