import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../features/star-wars-data/models/person';
import { Starship } from '../../../features/star-wars-data/models/starship';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent implements OnInit {

  @Input() mode: 'people' | 'starships' = 'people';
  @Input() playerOnePick: Person | Starship;
  @Input() playerTwoPick: Person | Starship;
  @Input() winner: 1 | 2;

  @Output() playerOneDraw = new EventEmitter();
  @Output() playerTwoDraw = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}

