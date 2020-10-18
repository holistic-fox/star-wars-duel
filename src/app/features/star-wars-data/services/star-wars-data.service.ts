import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StarWarsDataInterface } from '../store/star-wars-data.interface';
import { loadAllStarships, loadAllPeople } from '../store/star-wars-data.actions';
import { isGameWithPeopleReady, isGameWithStarshipsReady } from './../store/star-wars-data.selectors';

@Injectable()
export class StarWarsDataService {

  constructor(private store: Store<StarWarsDataInterface>) {
  }

  isGameWithPeopleReady = () => this.store.select(isGameWithPeopleReady);
  isGameWithStarshipsReady = () => this.store.select(isGameWithStarshipsReady);
  loadAllPeople = () => this.store.dispatch(loadAllPeople());
  loadAllStarships = () => this.store.dispatch(loadAllStarships());
}
