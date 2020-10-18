import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map, delay } from 'rxjs/operators';
import { SwapiResponse } from '../models/swapi-response';
import { Person } from '../models/person';
import { Starship } from '../models/starship';
import { people } from '../mock-data/people';
import { starships } from '../mock-data/starships';
import * as R from 'ramda';

@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://swapi.dev/api/';

  // getAllPeople(): Observable<SwapiResponse<Person>> {
  //   return this.http.get<SwapiResponse<Person>>(`${this.baseUrl}people/`).pipe(
  //     switchMap(response => this.getNext<Person>(response))
  //   );
  // }

  getAllPeople(): Observable<SwapiResponse<Person>>{
    return of({results: people, count: 82, next: null, previous: null});
  }
  // getAllShips(): Observable<SwapiResponse<Starship>> {
  //   return this.http.get<SwapiResponse<Starship>>(`${this.baseUrl}starships/`).pipe(
  //     switchMap(response => this.getNext<Starship>(response))
  //   );
  // }

  getAllShips(): Observable<SwapiResponse<Starship>> {
    return of({results: starships, count: 82, next: null, previous: null});
  }

  private getNext<T>(response: SwapiResponse<T>): Observable<SwapiResponse<T>> {
    if (R.isNil(response.next)) {
      return of(response);
    }
    return this.http.get<SwapiResponse<T>>(response.next).pipe(
      map(next => R.set(R.lensProp('results'), [...response.results, ...next.results], next)),
      switchMap(result => this.getNext<T>(result))
    );
  }
}
