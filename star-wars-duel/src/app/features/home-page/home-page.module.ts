import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { homePageReducer } from './store/home-page.reducer';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home_page', homePageReducer),
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
  ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageModule {}
