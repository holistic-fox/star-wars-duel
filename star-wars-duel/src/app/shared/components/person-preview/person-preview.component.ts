import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../features/star-wars-data/models/person';

@Component({
  selector: 'app-person-preview',
  templateUrl: './person-preview.component.html',
  styleUrls: ['./person-preview.component.scss']
})
export class PersonPreviewComponent implements OnInit {

  @Input() person: Person;

  constructor() {
  }

  ngOnInit(): void {
  }

}
