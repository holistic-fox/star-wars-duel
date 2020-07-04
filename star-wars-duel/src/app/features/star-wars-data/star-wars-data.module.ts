import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsDataService } from './services/star-wars-data.service';
import { StoreModule } from '@ngrx/store';
import { starWarsDataReducer } from './store/star-wars-data.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('star_wars_data', starWarsDataReducer)
  ],
  providers: [StarWarsDataService]
})
export class StarWarsDataModule { }
