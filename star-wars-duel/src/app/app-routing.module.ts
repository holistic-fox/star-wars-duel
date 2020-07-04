import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './features/home-page/containers/home-page/home-page.component';
import { PeopleDuelPageComponent } from './features/people-duel-page/containers/people-duel-page/people-duel-page.component';
import { StarshipsDuelPageComponent } from './features/starships-duel-page/containers/starships-duel-page/starships-duel-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'characters', component: PeopleDuelPageComponent },
  { path: 'starships', component: StarshipsDuelPageComponent },
  { path: '**', redirectTo: 'home' },
  ];

@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
