import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-bugs-delete-dialogue',
  templateUrl: './bugs-delete-dialogue.component.html',
  styleUrls: ['./bugs-delete-dialogue.component.scss']
})
export class BugsDeleteDialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BugsDeleteDialogueComponent>,
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
