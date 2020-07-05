import { Component, Input, OnInit } from '@angular/core';
import { Starship } from '../../../features/star-wars-data/models/starship';

@Component({
  selector: 'app-starship-preview',
  templateUrl: './starship-preview.component.html',
  styleUrls: ['./starship-preview.component.scss']
})
export class StarshipPreviewComponent implements OnInit {

  @Input() starship: Starship;

  constructor() {
  }

  ngOnInit(): void {
  }

}
