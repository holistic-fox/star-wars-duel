import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, take, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { StarWarsDataInterface } from '../../star-wars-data/store/star-wars-data.interface';
import { selectPeopleList, selectStarshipsList } from '../../star-wars-data/store/star-wars-data.selectors';
import { getRandomArrayElement } from '../utilities/gameplay.utilities';
import * as A from './gameplay.actions';
import { GameMode } from '../models/game-mode';
import * as R from 'ramda';

@Injectable()
export class GameplayEffects {

  playerDraw$ = createEffect(() => this.actions$.pipe(
    ofType(A.playerDraw),
    withLatestFrom(this.starWarsDataStore.select(selectPeopleList)),
    withLatestFrom(this.starWarsDataStore.select(selectStarshipsList)),
    map(([[payload, people], starships]) => {
      let entity;
      if (R.equals(payload.mode, GameMode.People)) {
        entity = getRandomArrayElement(people);
      }
      if (R.equals(payload.mode, GameMode.Starships)) {
        entity = getRandomArrayElement(starships);
      }
      return {payload, entity};
    }),
    map(({payload, entity}) => (
      A.playerDrawSuccess({
        player: payload.player,
        mode:  payload.mode,
        entity
      }))),
  ));

  constructor(
    private actions$: Actions,
    private starWarsDataStore: Store<StarWarsDataInterface>,
  ) {
  }
}

