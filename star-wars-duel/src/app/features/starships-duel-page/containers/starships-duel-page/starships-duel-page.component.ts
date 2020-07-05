import { Component, OnInit } from '@angular/core';
import { Player } from '../../../gameplay/models/player';
import { GameMode } from '../../../gameplay/models/game-mode';
import { GameplayService } from '../../../gameplay/services/gameplay.service';
import { Observable } from 'rxjs';
import { Starship } from '../../../star-wars-data/models/starship';

@Component({
  selector: 'app-starships-duel-page',
  templateUrl: './starships-duel-page.component.html',
  styleUrls: ['./starships-duel-page.component.scss']
})
export class StarshipsDuelPageComponent implements OnInit {

  public playerOnePick$: Observable<Starship>;
  public playerTwoPick$: Observable<Starship>;
  public isPlayerOnePickDisabled$: Observable<boolean>;
  public isPlayerTwoPickDisabled$: Observable<boolean>;
  public mode = GameMode.Starships;

  constructor(private gameplayService: GameplayService) {
  }

  ngOnInit(): void {
    this.playerOnePick$ = this.gameplayService.selectStarshipsDuelPlayerOnePick();
    this.playerTwoPick$ = this.gameplayService.selectStarshipsDuelPlayerTwoPick();
    this.isPlayerOnePickDisabled$ = this.gameplayService.canPlayerOneDrawAStarship();
    this.isPlayerTwoPickDisabled$ = this.gameplayService.canPlayerTwoDrawAStarship();
  }

  playerOneDraw = () => this.gameplayService.playerDraw(Player.One, GameMode.Starships);
  playerTwoDraw = () => this.gameplayService.playerDraw(Player.Two, GameMode.Starships);
  reset = () => this.gameplayService.reset(GameMode.Starships);
}
