import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageModule } from './features/home-page/home-page.module';
import { PeopleDuelPageModule } from './features/people-duel-page/people-duel-page.module';
import { StarshipsDuelPageModule } from './features/starships-duel-page/starships-duel-page.module';
import { StarWarsDataModule } from './features/star-wars-data/star-wars-data.module';
import { GameplayModule } from './features/gameplay/gameplay.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HomePageModule,
    StarWarsDataModule,
    StarshipsDuelPageModule,
    PeopleDuelPageModule,
    GameplayModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
