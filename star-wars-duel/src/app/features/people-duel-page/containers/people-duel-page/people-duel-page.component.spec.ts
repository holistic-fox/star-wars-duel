import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDuelPageComponent } from './people-duel-page.component';

describe('PeopleDuelPageComponent', () => {
  let component: PeopleDuelPageComponent;
  let fixture: ComponentFixture<PeopleDuelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleDuelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDuelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
