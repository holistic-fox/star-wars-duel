import { Component, OnInit } from '@angular/core';
import { Player } from '../../../gameplay/models/player';
import { GameMode } from '../../../gameplay/models/game-mode';
import { GameplayService } from '../../../gameplay/services/gameplay.service';

@Component({
  selector: 'app-starships-duel-page',
  templateUrl: './starships-duel-page.component.html',
  styleUrls: ['./starships-duel-page.component.scss']
})
export class StarshipsDuelPageComponent implements OnInit {

  constructor(private gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

  playerOneDraw = () => this.gameplayService.playerDraw(Player.One, GameMode.Starships);
  playerTwoDraw = () => this.gameplayService.playerDraw(Player.Two, GameMode.Starships);
  reset = () => this.gameplayService.reset(GameMode.Starships);
}
