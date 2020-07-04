import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameplayInterface } from '../store/gameplay.interface';

@Injectable()
export class GameplayService {

  constructor(private store: Store<GameplayInterface>) {
  }

}
