import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuelComponent } from './components/duel/duel.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { StarshipPreviewComponent } from './components/starship-preview/starship-preview.component';
import { PersonPreviewComponent } from './components/person-preview/person-preview.component';
import { PreviewListItemComponent } from './components/preview-list-item/preview-list-item.component';
import { DuelHistoryComponent } from './components/duel-history/duel-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [DuelComponent, StarshipPreviewComponent, PersonPreviewComponent, PreviewListItemComponent, DuelHistoryComponent],
  exports: [DuelComponent, DuelHistoryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule,
  ]
})
export class SharedModule { }
