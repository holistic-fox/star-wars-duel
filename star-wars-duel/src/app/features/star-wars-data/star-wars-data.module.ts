import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { starWarsDataReducer } from './store/star-wars-data.reducer';
import { StarWarsDataEffects } from './store/star-wars-data.effects';
import { StarWarsDataService } from './services/star-wars-data.service';
import { SwapiService } from './services/swapi.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('star_wars_data', starWarsDataReducer),
    EffectsModule.forFeature([StarWarsDataEffects])
  ],
  providers: [StarWarsDataService, SwapiService]
})
export class StarWarsDataModule { }
