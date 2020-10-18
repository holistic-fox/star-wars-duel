import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwapiService } from '../star-wars-data/services/swapi.service';
import { filter, first, map, skip, switchMap, take } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit, OnDestroy {

  finalResult;
  intervalSubscription;
  intervalElements: any[] = [];

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit(): void {

    this.swapiService.getAllPeople().pipe(
      map(response => response.results),
      map((people) => {
        return people.map((person, index) => {
          return {
            id: index,
            name: person.name
          };
        });
      }),
    ).subscribe(
      (result) => {
        this.finalResult = result;
      }
    );

    this.intervalSubscription = interval(1000).pipe(
      skip(2),
      filter( val => val % 2 === 0),
      take(4),
      map( val => ({ id: val })),
      // first( val => val.id === 4 ),
      switchMap(() => interval(100)),
      take(50),
    ).subscribe(
      val => { this.intervalElements.push(val);}
    );
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
