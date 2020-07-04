import { Component, OnInit } from '@angular/core';
import { StarWarsDataService } from './features/star-wars-data/services/star-wars-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'star-wars-duel';

  links = ['Home', 'Fight with characters', 'Fight with ships'];
  activeLink = this.links[0];

  constructor(private starWarsDataService: StarWarsDataService) {
  }

  ngOnInit(): void {
    this.starWarsDataService.loadAllPeople();
    this.starWarsDataService.loadAllStarships();
  }
}
