import { Component, OnInit } from '@angular/core';
import * as BugActions from '../bugs/store/actions/bug.actions';
import { Bug } from '../models/bug.model';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { selectAllBugs } from './store/reducers';
import { BugsAddDialogueComponent } from '../bugs/bugs-add-dialogue/bugs-add-dialogue.component';
import { MatDialog } from '@angular/material';

import {Roche7Service} from './roche7.service';

@Component({
  selector: 'app-roche7',
  templateUrl: './roche7.component.html',
  styleUrls: ['./roche7.component.scss']
})
export class Roche7Component implements OnInit {
  bugs$: any;
  bugValue: string;
  editing = false;
  idToEdit: string | null;

  constructor(private store: Store<any>,
    public roche7Service: Roche7Service,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.bugs$ = this.store.select(selectAllBugs);

  }

}
