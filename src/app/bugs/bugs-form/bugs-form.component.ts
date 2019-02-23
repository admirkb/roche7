import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bug } from '../../models/bug.model';
import { Store } from '@ngrx/store';
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

    this.roche7Service.addBug(this.registerForm.value.problem);
    this.registerForm.reset();
    this.submitted = false;
  }


}
