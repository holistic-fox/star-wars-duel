import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { StarWarsDataInterface } from '../../star-wars-data/store/star-wars-data.interface';
import { selectPeopleList, selectStarshipsList } from '../../star-wars-data/store/star-wars-data.selectors';
import { getRandomArrayElement } from '../utilities/gameplay.utilities';
import { GameMode } from '../models/game-mode';
import { GameplayInterface } from './gameplay.interface';
import * as S from '../store/gameplay.selectors';
import * as A from './gameplay.actions';
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
        mode: payload.mode,
        entity
      }))),
  ));

  addHistoryRecord$ = createEffect(() => this.actions$.pipe(
    ofType(A.playerDrawSuccess),
    withLatestFrom(this.gameplayStore.select(S.selectDataForPeopleDuelHistoryRecord)),
    withLatestFrom(this.gameplayStore.select(S.selectDataForStarshipsDuelHistoryRecord)),
    tap(([[_, people], starships]) => {
      if (!R.isNil(people)) {
        this.gameplayStore.dispatch(A.addHistoryRecord({
          record: {
            timestamp: Date.now(),
            mode: GameMode.People,
            player1: people.player1,
            player2: people.player2,
            result: people.result
          }
        }));
      }
      if (!R.isNil(starships)) {
        this.gameplayStore.dispatch(A.addHistoryRecord({
          record: {
            timestamp: Date.now(),
            mode: GameMode.Starships,
            player1: starships.player1,
            player2: starships.player2,
            result: starships.result
          }
        }));
      }
    })
  ), {dispatch: false});

  resetGameOnNavigationChange$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map(() => (A.resetGameplay()))
  ));

  constructor(
    private actions$: Actions,
    private starWarsDataStore: Store<StarWarsDataInterface>,
    private gameplayStore: Store<GameplayInterface>
  ) {
  }
}

