import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewListItemComponent } from './preview-list-item.component';

describe('PreviewListItemComponent', () => {
  let component: PreviewListItemComponent;
  let fixture: ComponentFixture<PreviewListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
