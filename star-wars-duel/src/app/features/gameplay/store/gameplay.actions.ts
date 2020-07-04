import { createAction, props } from '@ngrx/store';
import { GameMode } from '../models/game-mode';
import { Player } from '../models/player';
import { Person } from '../../star-wars-data/models/person';
import { Starship } from '../../star-wars-data/models/starship';

const PREFIX = '[GAMEPLAY]';

export const reset = createAction(`${PREFIX} Reset`, props<{ mode: GameMode }>());

export const playerDraw = createAction(`${PREFIX} Player draw`, props<{ player: Player, mode: GameMode }>());

export const playerDrawSuccess = createAction(
  `${PREFIX} Player draw success`,
  props<{ player: Player, mode: GameMode, entity: Person | Starship }>()
);

