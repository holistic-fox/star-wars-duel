import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import * as R from 'ramda';

interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: [];
}

@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://swapi.dev/api/';

  getPeople(): Observable<SwapiResponse> {
    return this.http.get<SwapiResponse>(`${this.baseUrl}people/`).pipe(
      switchMap(response => this.getNext(response))
    );
  }

  getShips(): Observable<SwapiResponse> {
    return this.http.get<SwapiResponse>(`${this.baseUrl}starships/`).pipe(
      switchMap(response => this.getNext(response))
    );
  }

  private getNext(response: SwapiResponse): Observable<SwapiResponse> {
    if (R.isNil(response.next)) {
      return of(response);
    }
    return this.http.get<SwapiResponse>(response.next).pipe(
      map(next => R.set(R.lensProp('results'), [...response.results, ...next.results], next)),
      switchMap(result => this.getNext(result))
    );
  }
}
