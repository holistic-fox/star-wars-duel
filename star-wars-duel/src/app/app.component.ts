import { Component, OnInit } from '@angular/core';
import { StarWarsDataService } from './features/star-wars-data/services/star-wars-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  links = [
    {path: 'home', title: 'DOM'},
    {path: 'characters', title: 'Walka 1'},
    {path: 'starships', title: 'Walka 2'}
  ];

  constructor(private starWarsDataService: StarWarsDataService) {
  }

  ngOnInit(): void {
    this.starWarsDataService.loadAllPeople();
    this.starWarsDataService.loadAllStarships();
  }
}
