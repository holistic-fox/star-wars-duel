import { Component, OnInit } from '@angular/core';
import { GameplayService } from '../../../gameplay/services/gameplay.service';
import { Player } from '../../../gameplay/models/player';
import { GameMode } from '../../../gameplay/models/game-mode';

@Component({
  selector: 'app-people-duel-page',
  templateUrl: './people-duel-page.component.html',
  styleUrls: ['./people-duel-page.component.scss']
})
export class PeopleDuelPageComponent implements OnInit {

  constructor(private gameplayService: GameplayService) { }

  ngOnInit(): void {
  }

  playerOneDraw = () => this.gameplayService.playerDraw(Player.One, GameMode.People);
  playerTwoDraw = () => this.gameplayService.playerDraw(Player.Two, GameMode.People);
  reset = () => this.gameplayService.reset(GameMode.People);
}
