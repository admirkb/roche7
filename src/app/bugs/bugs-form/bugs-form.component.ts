import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../../models/bug.model';
import { Store } from '@ngrx/store';
import { BugsAddDialogueComponent } from '../../bugs/bugs-add-dialogue/bugs-add-dialogue.component';
import { MatDialog } from '@angular/material';
import { Roche7Service } from '../../roche7/roche7.service';

@Component({
  selector: 'app-bugs-form',
  templateUrl: './bugs-form.component.html',
  styleUrls: ['./bugs-form.component.css']
})
export class BugsFormComponent implements OnInit {

  bug: Bug;
  bugValue: string;



  registerForm: FormGroup;
  submitted = false;

  constructor(public fb: FormBuilder,
    public roche7Service: Roche7Service,
    private store: Store<any>,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      problem: ['', Validators.required],

    }, {
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.openAddDialog();
  }

  openAddDialog() {

    const dialogRef = this.dialog.open(BugsAddDialogueComponent, {
      width: 'auto',
      height: 'auto',
      data: { heading: this.registerForm.value.problem }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed result', result);

      if (result !== undefined) {
        this.roche7Service.addBug(this.registerForm.value.problem);

      }
      this.registerForm.reset();
      this.submitted = false;

    });

  }
}
