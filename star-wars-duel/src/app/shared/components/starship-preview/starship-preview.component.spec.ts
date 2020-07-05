import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipPreviewComponent } from './starship-preview.component';

describe('StarshipPreviewComponent', () => {
  let component: StarshipPreviewComponent;
  let fixture: ComponentFixture<StarshipPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
