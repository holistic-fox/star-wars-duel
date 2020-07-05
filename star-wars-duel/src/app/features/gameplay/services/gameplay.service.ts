import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameplayInterface } from '../store/gameplay.interface';
import { GameMode } from '../models/game-mode';
import { Player } from '../models/player';
import * as S from '../store/gameplay.selectors';
import * as A from '../store/gameplay.actions';

@Injectable()
export class GameplayService {

  constructor(private store: Store<GameplayInterface>) {
  }

  selectPeopleDuelPlayerOnePick = () => this.store.select(S.selectPeopleDuelPlayerOnePick);
  selectPeopleDuelPlayerTwoPick = () => this.store.select(S.selectPeopleDuelPlayerTwoPick);
  canPlayerOneDrawACharacter = () => this.store.select(S.canPlayerOneDrawACharacter);
  canPlayerTwoDrawACharacter = () => this.store.select(S.canPlayerTwoDrawACharacter);
  canCharacterGameBeReset = () => this.store.select(S.canCharacterGameBeReset);
  selectCharacterDuelWinner = () => this.store.select(S.selectCharacterDuelWinner);

  selectStarshipsDuelPlayerOnePick = () => this.store.select(S.selectStarshipsDuelPlayerOnePick);
  selectStarshipsDuelPlayerTwoPick = () => this.store.select(S.selectStarshipsDuelPlayerTwoPick);
  canPlayerOneDrawAStarship = () => this.store.select(S.canPlayerOneDrawAStarship);
  canPlayerTwoDrawAStarship = () => this.store.select(S.canPlayerTwoDrawAStarship);
  canStarshipsGameBeReset = () => this.store.select(S.canStarshipsGameBeReset);

  playerDraw = (player: Player, mode: GameMode) => this.store.dispatch(A.playerDraw({player, mode}));
  reset = (mode: GameMode) => this.store.dispatch(A.reset({mode}));
}
