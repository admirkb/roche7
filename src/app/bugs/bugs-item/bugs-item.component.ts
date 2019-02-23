import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BugsDeleteDialogueComponent } from '../../bugs/bugs-delete-dialogue/bugs-delete-dialogue.component';
import { MatDialog } from '@angular/material';
import { Roche7Service } from '../../roche7/roche7.service';

@Component({
  selector: 'app-bugs-item',
  templateUrl: './bugs-item.component.html',
  styleUrls: ['./bugs-item.component.css']
})
export class BugsItemComponent implements OnInit {
  @Input() bug;
  @Input() index;
  isEditable = false;

  constructor(private store: Store<any>,
    public roche7Service: Roche7Service,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteBug(id) {
    this.roche7Service.deleteBug(id);
  }

  editBug(bug) {
    this.isEditable = true;
  }

  cancelBug(bug) {
    this.isEditable = false;
  }

  updateBug(bug) {
    this.roche7Service.updateBug(bug);
    this.isEditable = false;
  }

  openDeleteDialog() {

    const dialogRef = this.dialog.open(BugsDeleteDialogueComponent, {
      width: 'auto',
      height: 'auto',
      data: {heading: this.bug.problem}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result', result);

      if (result !== undefined) {
        this.deleteBug(this.bug.id);
      }


    });

  }
}

