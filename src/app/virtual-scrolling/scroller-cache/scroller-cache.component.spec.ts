import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerCacheComponent } from './scroller-cache.component';

describe('ScrollerCacheComponent', () => {
  let component: ScrollerCacheComponent;
  let fixture: ComponentFixture<ScrollerCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
