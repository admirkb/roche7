import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Roche7Component } from './roche7.component';
import { FormsModule } from '@angular/forms';
import { BugsModule } from '../bugs/bugs.module';
import { MaterialDesignModule } from '../material-design/material-design.module';

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
export class Roche7Module { }
