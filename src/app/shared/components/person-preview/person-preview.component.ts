import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../../features/star-wars-data/models/person';

@Component({
  selector: 'app-person-preview',
  templateUrl: './person-preview.component.html',
  styleUrls: ['./person-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonPreviewComponent {

  @Input() person: Person;
}
