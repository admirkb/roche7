import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Roche7Component } from './roche7.component';
import { FormsModule } from '@angular/forms';
import { BugsModule } from '../bugs/bugs.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { Roche7Service } from './roche7.service';

@NgModule({
  declarations: [Roche7Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BugsModule,
    MaterialDesignModule
  ],
})
export class Roche7Module {

  constructor(private roche7Service: Roche7Service) {

    const preBugs = [
      '1st bug',
      '2nd bug',
      '3rd bug',
      '4th bug',
      '5th bug'
    ];


    for (let i = 0; i < preBugs.length; i++) {
      this.roche7Service.addBug(preBugs[i]);
    }
  }
}
