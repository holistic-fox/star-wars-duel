import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { homePageReducer } from './store/home-page.reducer';
import { HomePageComponent } from './containers/home-page/home-page.component';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('home_page', homePageReducer),
  ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageModule {}
