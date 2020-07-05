import { Component, Input} from '@angular/core';
import { DuelRecord } from '../../../features/gameplay/models/duel-record';

@Component({
  selector: 'app-duel-history',
  templateUrl: './duel-history.component.html',
  styleUrls: ['./duel-history.component.scss']
})
export class DuelHistoryComponent{

  @Input() history: DuelRecord[];
  displayedColumns: string[] = ['time', 'player1', 'player2', 'result'];
}
