import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsDeleteDialogueComponent } from './bugs-delete-dialogue.component';

describe('BugsDeleteDialogueComponent', () => {
  let component: BugsDeleteDialogueComponent;
  let fixture: ComponentFixture<BugsDeleteDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsDeleteDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsDeleteDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
