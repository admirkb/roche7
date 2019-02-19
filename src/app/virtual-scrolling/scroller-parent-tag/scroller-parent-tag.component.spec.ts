import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerParentTagComponent } from './scroller-parent-tag.component';

describe('ScrollerParentTagComponent', () => {
  let component: ScrollerParentTagComponent;
  let fixture: ComponentFixture<ScrollerParentTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerParentTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerParentTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
