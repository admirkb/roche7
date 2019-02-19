import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerFixedBufferComponent } from './scroller-fixed-buffer.component';

describe('ScrollerFixedBufferComponent', () => {
  let component: ScrollerFixedBufferComponent;
  let fixture: ComponentFixture<ScrollerFixedBufferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerFixedBufferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerFixedBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
