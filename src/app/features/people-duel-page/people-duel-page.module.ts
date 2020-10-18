import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDuelPageComponent } from './containers/people-duel-page/people-duel-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PeopleDuelPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PeopleDuelPageModule { }
