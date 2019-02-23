import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllBugs } from './store/reducers';
import { UUID } from 'angular2-uuid';
import { Bug } from '../models/bug.model';
import * as BugActions from './store/actions/bug.actions';

@Injectable({
  providedIn: 'root'
})
export class Roche7Service {
  bugs$: any;

  constructor(
    private store: Store<any>
  ) {

    const preBugs = [
      '1st bug',
      '2nd bug',
      '3rd bug',
      '4th bug',
      '5th bug'
    ]

    // this.bugs$ = this.store.select(selectAllBugs);

    // for (let i = 0; i < preBugs.length; i++) {
    //   this.addBug(preBugs[i]);
    // }
   }

   addBug(value) {
    const bug: Bug = {
      problem: value,
      response: null,
      dateCreated: new Date(),
      dateResolved: null,
      id: this.generateUUID()
    };
    this.store.dispatch(new BugActions.AddBug({ bug }));

  }

  deleteBug(id) {
    this.store.dispatch(new BugActions.DeleteBug({ id }));
  }

  updateBug(bug) {
    bug.dateResolved = new Date();
    this.store.dispatch(
      new BugActions.UpdateBug(bug)
    );

  }
  generateUUID() {
    return UUID.UUID();
  }
}
