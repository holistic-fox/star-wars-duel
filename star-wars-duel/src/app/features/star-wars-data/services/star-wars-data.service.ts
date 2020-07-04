import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StarWarsDataInterface } from '../store/star-wars-data.interface';
import { loadAllStarships, loadAllPeople } from '../store/star-wars-data.actions';

@Injectable()
export class StarWarsDataService {

  constructor(private store: Store<StarWarsDataInterface>) {
  }

  loadAllPeople = () => this.store.dispatch(loadAllPeople());
  loadAllStarships = () => this.store.dispatch(loadAllStarships());
}
