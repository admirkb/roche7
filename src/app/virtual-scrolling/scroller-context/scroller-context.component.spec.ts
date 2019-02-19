import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerContextComponent } from './scroller-context.component';

describe('ScrollerContextComponent', () => {
  let component: ScrollerContextComponent;
  let fixture: ComponentFixture<ScrollerContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
