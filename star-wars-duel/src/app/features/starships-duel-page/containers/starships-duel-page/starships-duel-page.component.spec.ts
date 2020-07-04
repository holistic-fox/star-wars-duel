import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsDuelPageComponent } from './starships-duel-page.component';

describe('StarshipsDuelPageComponent', () => {
  let component: StarshipsDuelPageComponent;
  let fixture: ComponentFixture<StarshipsDuelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsDuelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsDuelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
