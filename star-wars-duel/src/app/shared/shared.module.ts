import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuelComponent } from './components/duel/duel.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { StarshipPreviewComponent } from './components/starship-preview/starship-preview.component';
import { PersonPreviewComponent } from './components/person-preview/person-preview.component';
import { PreviewListItemComponent } from './components/preview-list-item/preview-list-item.component';



@NgModule({
  declarations: [DuelComponent, StarshipPreviewComponent, PersonPreviewComponent, PreviewListItemComponent],
  exports: [DuelComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
