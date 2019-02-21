import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BugActions from '../store/actions/bug.actions';
import { Bug } from '../../models/bug.model';
import { BugsDeleteDialogueComponent } from '../../bugs/bugs-delete-dialogue/bugs-delete-dialogue.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bugs-item',
  templateUrl: './bugs-item.component.html',
  styleUrls: ['./bugs-item.component.css']
})
export class BugsItemComponent implements OnInit {
  @Input() bug;
  @Input() index;
  isEditable: boolean = false;

  constructor(private store: Store<any>,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteBug(id) {
    this.store.dispatch(new BugActions.DeleteBug({ id }));
  }

  editBug(bug) {

    this.isEditable = true;
    let b = { bug: bug };
    console.log("editBug", bug)

  }

  cancelBug(bug) {

    this.isEditable = false;

  }

  updateBug(bug) {

    this.store.dispatch(
      new BugActions.UpdateBug({
        id: bug.id,
        response: bug.response,
        dateResolved: new Date()
      })
    );

    this.isEditable = false;
  }

  openDeleteDialog() {

    const dialogRef = this.dialog.open(BugsDeleteDialogueComponent, {
      width: '250px',
      height: 'auto',
      data: {heading: 'my heading'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result', result);

      if (result !== undefined) {
        this.deleteBug(this.bug.id)
      }


    });

  }
}

