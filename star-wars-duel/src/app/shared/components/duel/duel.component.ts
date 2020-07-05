import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../features/star-wars-data/models/person';
import { Starship } from '../../../features/star-wars-data/models/starship';
import { GameMode } from '../../../features/gameplay/models/game-mode';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent {

  @Input() mode: GameMode = GameMode.People;
  @Input() playerOnePick: Person | Starship;
  @Input() playerTwoPick: Person | Starship;
  @Input() isPlayerOnePickDisabled = false;
  @Input() isPlayerTwoPickDisabled = false;
  @Input() isResetGameDisabled = true;
  @Input() winner: string;

  @Output() playerOneDraw = new EventEmitter();
  @Output() playerTwoDraw = new EventEmitter();
  @Output() reset = new EventEmitter();

  public gameMode = GameMode;
}

