import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../../features/star-wars-data/models/person';
import { Starship } from '../../../features/star-wars-data/models/starship';
import { GameMode } from '../../../features/gameplay/models/game-mode';
import { Player } from '../../../features/gameplay/models/player';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent implements OnInit {

  @Input() mode: GameMode = GameMode.People;
  @Input() playerOnePick: Person | Starship;
  @Input() playerTwoPick: Person | Starship;
  @Input() winner: Player;

  @Output() playerOneDraw = new EventEmitter();
  @Output() playerTwoDraw = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}
