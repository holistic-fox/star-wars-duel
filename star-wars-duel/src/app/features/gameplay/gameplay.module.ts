import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { gameplayReducer } from './store/gameplay.reducer';
import { GameplayService } from './services/gameplay.service';
import { EffectsModule } from '@ngrx/effects';
import { GameplayEffects } from './store/gameplay.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('gameplay', gameplayReducer),
    EffectsModule.forFeature([GameplayEffects])
  ],
  providers: [GameplayService]
})
export class GameplayModule { }
