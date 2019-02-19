import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerStrategiesComponent } from './scroller-strategies.component';

describe('ScrollerStrategiesComponent', () => {
  let component: ScrollerStrategiesComponent;
  let fixture: ComponentFixture<ScrollerStrategiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerStrategiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
