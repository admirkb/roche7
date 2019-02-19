import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerHorizontalComponent } from './scroller-horizontal.component';

describe('ScrollerHorizontalComponent', () => {
  let component: ScrollerHorizontalComponent;
  let fixture: ComponentFixture<ScrollerHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
