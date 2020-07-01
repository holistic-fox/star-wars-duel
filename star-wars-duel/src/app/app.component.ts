import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-wars-duel';

  links = ['Home', 'Fight with characters', 'Fight with ships'];
  activeLink = this.links[0];
}
