import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerDataSourceComponent } from './scroller-data-source.component';

describe('ScrollerDataSourceComponent', () => {
  let component: ScrollerDataSourceComponent;
  let fixture: ComponentFixture<ScrollerDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
