import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameplayService } from '../../../gameplay/services/gameplay.service';
import { Player } from '../../../gameplay/models/player';
import { GameMode } from '../../../gameplay/models/game-mode';
import { Observable } from 'rxjs';
import { Person } from '../../../star-wars-data/models/person';
import { StarWarsDataService } from '../../../star-wars-data/services/star-wars-data.service';
import { DuelRecord } from '../../../gameplay/models/duel-record';
import { GameResults } from '../../../gameplay/models/game-results';

@Component({
  selector: 'app-people-duel-page',
  templateUrl: './people-duel-page.component.html',
  styleUrls: ['./people-duel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleDuelPageComponent implements OnInit {

  public playerOnePick$: Observable<Person>;
  public playerTwoPick$: Observable<Person>;
  public isPlayerOnePickDisabled$: Observable<boolean>;
  public isPlayerTwoPickDisabled$: Observable<boolean>;
  public isResetGameDisabled$: Observable<boolean>;
  public result$: Observable<string>;
  public isGameReady$: Observable<boolean>;
  public history$: Observable<DuelRecord[]>;
  public playerOneScore$: Observable<number>;
  public playerTwoScore$: Observable<number>;
  public mode = GameMode.People;

  constructor(private gameplayService: GameplayService, private data: StarWarsDataService) {
  }

  ngOnInit(): void {
    this.playerOnePick$ = this.gameplayService.selectPeopleDuelPlayerOnePick();
    this.playerTwoPick$ = this.gameplayService.selectPeopleDuelPlayerTwoPick();
    this.isPlayerOnePickDisabled$ = this.gameplayService.canPlayerOneDrawACharacter();
    this.isPlayerTwoPickDisabled$ = this.gameplayService.canPlayerTwoDrawACharacter();
    this.isResetGameDisabled$ = this.gameplayService.canCharacterGameBeReset();
    this.result$ = this.gameplayService.selectCharacterDuelResults();
    this.isGameReady$ = this.data.isGameWithPeopleReady();
    this.history$ = this.gameplayService.selectPeopleDuelsHistory();
    this.playerOneScore$ = this.gameplayService.selectPlayerScoreInPeopleDuel(GameResults.Player1);
    this.playerTwoScore$ = this.gameplayService.selectPlayerScoreInPeopleDuel(GameResults.Player2);
  }

  playerOneDraw = () => this.gameplayService.playerDraw(Player.One, GameMode.People);
  playerTwoDraw = () => this.gameplayService.playerDraw(Player.Two, GameMode.People);
  reset = () => this.gameplayService.resetMode(GameMode.People);
}
