import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-list-item',
  templateUrl: './preview-list-item.component.html',
  styleUrls: ['./preview-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewListItemComponent {

  @Input() label: string;
  @Input() value: string | number;
}
