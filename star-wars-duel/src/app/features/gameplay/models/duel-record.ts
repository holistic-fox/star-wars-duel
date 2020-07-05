import { GameMode } from './game-mode';
import { Starship } from '../../star-wars-data/models/starship';
import { Person } from '../../star-wars-data/models/person';
import { GameResults } from './game-results';

export interface DuelRecord {
  timestamp: number;
  mode: GameMode;
  player1: Person | Starship;
  player2: Person | Starship;
  result: GameResults;
}
