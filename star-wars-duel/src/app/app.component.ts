import { Component, OnInit } from '@angular/core';
import { StarWarsDataService } from './features/star-wars-data/services/star-wars-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  links = [
    {path: 'home', title: 'Home'},
    {path: 'characters', title: 'Fight with characters'},
    {path: 'starships', title: 'Fight with ships'}
  ];

  constructor(private starWarsDataService: StarWarsDataService) {
  }

  ngOnInit(): void {
    this.starWarsDataService.loadAllPeople();
    this.starWarsDataService.loadAllStarships();
  }
}
