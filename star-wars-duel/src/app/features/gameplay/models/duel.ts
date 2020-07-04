import { Player } from './player';
import { Starship } from '../../star-wars-data/models/starship';
import { Person } from '../../star-wars-data/models/person';

export interface Duel {
  playerOnePick: Person | Starship;
  playerTwoPick: Person | Starship;
  winner: Player;
}
