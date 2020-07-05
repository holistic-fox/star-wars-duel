import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { gameplayReducer } from './store/gameplay.reducer';
import { GameplayService } from './services/gameplay.service';
import { GameplayEffects } from './store/gameplay.effects';
import { gameplayStoreName } from './store/gameplay.interface';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(gameplayStoreName, gameplayReducer),
    EffectsModule.forFeature([GameplayEffects])
  ],
  providers: [GameplayService]
})
export class GameplayModule { }
