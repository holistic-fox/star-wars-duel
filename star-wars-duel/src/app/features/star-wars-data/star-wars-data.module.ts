import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsDataService } from './services/star-wars-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StarWarsDataService]
})
export class StarWarsDataModule { }
