import { createAction, props } from '@ngrx/store';
import { GameMode } from '../models/game-mode';
import { Player } from '../models/player';
import { Person } from '../../star-wars-data/models/person';
import { Starship } from '../../star-wars-data/models/starship';
import { DuelRecord } from '../models/duel-record';

const PREFIX = '[GAMEPLAY]';

export const resetMode = createAction(`${PREFIX} Reset mode`, props<{ mode: GameMode }>());

export const resetGameplay = createAction(`${PREFIX} Reset gameplay`);

export const playerDraw = createAction(`${PREFIX} Player draw`, props<{ player: Player, mode: GameMode }>());

export const playerDrawSuccess = createAction(
  `${PREFIX} Player draw success`,
  props<{ player: Player, mode: GameMode, entity: Person | Starship }>()
);

export const addHistoryRecord = createAction(`${PREFIX} Add history record`, props<{ record: DuelRecord }>());
