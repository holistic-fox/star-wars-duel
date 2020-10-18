import { Player } from './player';
import { Starship } from '../../star-wars-data/models/starship';

export interface StarshipsDuel {
  playerOnePick: Starship;
  playerTwoPick: Starship;
}
