import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsAddDialogueComponent } from './bugs-add-dialogue.component';

describe('BugsAddDialogueComponent', () => {
  let component: BugsAddDialogueComponent;
  let fixture: ComponentFixture<BugsAddDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsAddDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsAddDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
