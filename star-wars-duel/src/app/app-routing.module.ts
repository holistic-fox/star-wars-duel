import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { HomePageComponent } from './features/home-page/containers/home-page/home-page.component';



const routes: Routes = [
  { path: '**', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent }
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
