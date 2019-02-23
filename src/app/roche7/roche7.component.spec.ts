import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Roche7Component } from './roche7.component';

describe('Roche7Component', () => {
  let component: Roche7Component;
  let fixture: ComponentFixture<Roche7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roche7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roche7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
