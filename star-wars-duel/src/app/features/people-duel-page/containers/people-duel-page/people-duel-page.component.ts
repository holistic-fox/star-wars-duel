import { Component, OnInit } from '@angular/core';
import { GameplayService } from '../../../gameplay/services/gameplay.service';
import { Player } from '../../../gameplay/models/player';
import { GameMode } from '../../../gameplay/models/game-mode';
import { Observable } from 'rxjs';
import { Person } from '../../../star-wars-data/models/person';

@Component({
  selector: 'app-people-duel-page',
  templateUrl: './people-duel-page.component.html',
  styleUrls: ['./people-duel-page.component.scss']
})
export class PeopleDuelPageComponent implements OnInit {

  public playerOnePick$: Observable<Person>;
  public playerTwoPick$: Observable<Person>;
  public isPlayerOnePickDisabled$: Observable<boolean>;
  public isPlayerTwoPickDisabled$: Observable<boolean>;
  public isResetGameDisabled$: Observable<boolean>;
  public result$: Observable<string>;

  public mode = GameMode.People;

  constructor(private gameplayService: GameplayService) {
  }

  ngOnInit(): void {
    this.playerOnePick$ = this.gameplayService.selectPeopleDuelPlayerOnePick();
    this.playerTwoPick$ = this.gameplayService.selectPeopleDuelPlayerTwoPick();
    this.isPlayerOnePickDisabled$ = this.gameplayService.canPlayerOneDrawACharacter();
    this.isPlayerTwoPickDisabled$ = this.gameplayService.canPlayerTwoDrawACharacter();
    this.isResetGameDisabled$ = this.gameplayService.canCharacterGameBeReset();
    this.result$ = this.gameplayService.selectCharacterDuelResults();
  }

  playerOneDraw = () => this.gameplayService.playerDraw(Player.One, GameMode.People);
  playerTwoDraw = () => this.gameplayService.playerDraw(Player.Two, GameMode.People);
  reset = () => this.gameplayService.reset(GameMode.People);
}
