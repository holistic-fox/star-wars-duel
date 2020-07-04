import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameplayInterface } from '../store/gameplay.interface';
import { GameMode } from '../models/game-mode';
import { Player } from '../models/player';
import * as A from '../store/gameplay.actions';

@Injectable()
export class GameplayService {

  constructor(private store: Store<GameplayInterface>) {
  }

  playerDraw = (player: Player, mode: GameMode) => this.store.dispatch(A.playerDraw({ player, mode }));
  reset = (mode: GameMode) => this.store.dispatch(A.reset({ mode }));
}
