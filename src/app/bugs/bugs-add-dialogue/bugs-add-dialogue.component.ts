import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-bugs-add-dialogue',
  templateUrl: './bugs-add-dialogue.component.html',
  styleUrls: ['./bugs-add-dialogue.component.scss']
})
export class BugsAddDialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BugsAddDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(data): void {
    this.dialogRef.close();
  }
}
