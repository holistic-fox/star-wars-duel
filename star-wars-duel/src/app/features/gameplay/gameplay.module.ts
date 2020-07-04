import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { gameplayReducer } from './store/gameplay.reducer';
import { GameplayService } from './services/gameplay.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('gameplay', gameplayReducer),
  ],
  providers: [GameplayService]
})
export class GameplayModule { }
