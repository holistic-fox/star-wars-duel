import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsDuelPageComponent } from './containers/starships-duel-page/starships-duel-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [StarshipsDuelPageComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class StarshipsDuelPageModule { }
