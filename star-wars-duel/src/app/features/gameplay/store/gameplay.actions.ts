import { createAction, props } from '@ngrx/store';
import { GameMode } from '../models/game-mode';
import { Player } from '../models/player';

const PREFIX = '[GAMEPLAY]';

export const reset = createAction(`${PREFIX} Reset`, props<{ mode: GameMode }>());

export const playerDraw = createAction(`${PREFIX} Player draw`, props<{ player: Player, mode: GameMode }>());

