import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SwapiService } from './../services/swapi.service';
import * as A from './star-wars-data.actions';

@Injectable()
export class StarWarsDataEffects {

  loadAllPeople$ = createEffect(() => this.actions$.pipe(
    ofType(A.loadAllPeople),
    mergeMap(() => this.swapiService.getAllPeople()
      .pipe(
        map(response => (A.loadAllPeopleSuccess({ people: response.results })),
          catchError(() => A.loadAllPeopleError)
        ))
    )
  ));

  loadAllStarships$ = createEffect(() => this.actions$.pipe(
    ofType(A.loadAllStarships),
    mergeMap(() => this.swapiService.getAllShips()
      .pipe(
        map(response => (A.loadAllStarshipsSuccess({ starships: response.results })),
          catchError(() => A.loadAllStarshipError)
        ))
    )
  ));

  constructor(
    private actions$: Actions,
    private swapiService: SwapiService
  ) {}
}

