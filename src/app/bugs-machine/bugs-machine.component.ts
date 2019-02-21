import { Component, OnInit } from '@angular/core';
import * as BugActions from '../bugs-machine/store/actions/bug.actions';
import { Bug } from '../models/bug.model';
import { UUID } from 'angular2-uuid';
import { Store } from '@ngrx/store';
import { selectAllBugs } from './store/reducers';
import { BugsAddDialogueComponent } from '../bugs/bugs-add-dialogue/bugs-add-dialogue.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-bugs-machine',
  templateUrl: './bugs-machine.component.html',
  styleUrls: ['./bugs-machine.component.css']
})
export class BugsMachineComponent implements OnInit {
  bugs$: any;
  bugValue: string;
  editing = false;
  idToEdit: string | null;

  constructor(private store: Store<any>,
    public dialog: MatDialog) { }

  ngOnInit() {

    const preBugs = [
      '1st bug',
      '2nd bug',
      '3rd bug',
      '4th bug',
      '5th bug'
    ]

    this.bugs$ = this.store.select(selectAllBugs);

    for (let i = 0; i < preBugs.length; i++) {
      this.addBug(preBugs[i]);
    }
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

    this.bugValue = null;
  }

  openAddDialog() {

    const dialogRef = this.dialog.open(BugsAddDialogueComponent, {
      width: '250px',
      height: 'auto',
      data: this.bugValue
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result', result);

      if (result !== undefined) {
        this.addBug(this.bugValue);
      }


    });

  }

  // deleteBug(id) {
  //   this.store.dispatch(new BugActions.DeleteBug({ id }));
  // }

  // editBug(bug) {
  //   this.editing = true;
  //   this.bug = bug.value;
  //   this.idToEdit = bug.id;
  // }

  // cancelEdit() {
  //   this.editing = false;
  //   this.bug = '';
  //   this.idToEdit = null;
  // }

  // updateBug(updatedBug) {
  //   this.store.dispatch(
  //     new BugActions.UpdateBug({
  //       id: this.idToEdit,
  //       newValue: updatedBug
  //     })
  //   );
  //   this.bug = '';
  //   this.idToEdit = null;
  //   this.editing = false;
  // }

  // toggleDone(bug) {
  //   this.store.dispatch(
  //     new BugActions.ToggleDone({ id: bug.id, done: !bug.done })
  //   );
  // }

  generateUUID() {
    return UUID.UUID();
  }

  // openDeleteDialog() {

  //   const dialogRef = this.dialog.open(BugsDeleteDialogueComponent, {
  //     width: '250px',
  //     height: 'auto',
  //     // data: this.banner
  //   });



  // }
}
